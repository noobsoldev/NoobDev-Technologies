import express from 'express';
import { Client } from '@notionhq/client';
import cors from 'cors';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

const app = express();
const PORT = 3000;

// Persistent storage setup
const DATA_FILE = path.join(process.cwd(), 'interactions.json');

const loadInteractions = () => {
  if (!fs.existsSync(DATA_FILE)) {
    return { likes: {}, comments: {} };
  }
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (e) {
    return { likes: {}, comments: {} };
  }
};

const saveInteractions = (data: any) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

// Middleware
app.use(cors());
app.use(express.json());

// Notion API Helper
async function notionFetch(endpoint: string, method: string = 'GET', body?: any) {
  const url = `https://api.notion.com/v1/${endpoint}`;
  const headers = {
    'Authorization': `Bearer ${process.env.NOTION_API_KEY}`,
    'Notion-Version': '2022-06-28',
    'Content-Type': 'application/json'
  };

  const options: RequestInit = {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined
  };

  const res = await fetch(url, options);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Notion API Error ${res.status}: ${text}`);
  }
  return res.json();
}

const DATABASE_ID = "30df75bf205280eb94bac3b90c6f37d5";

// API Routes
app.get('/api/blog', async (req, res) => {
  try {
    // Fetch with filter
    const response = await notionFetch(`databases/${DATABASE_ID}/query`, 'POST', {
      filter: {
        property: 'Published',
        checkbox: {
          equals: true
        }
      },
      sorts: [
        {
          property: 'Date',
          direction: 'descending'
        }
      ]
    });

    console.log(`[Notion] Fetched ${response.results.length} published posts.`);

    const posts = response.results.map((page: any) => {
      const props = page.properties;
      return {
        id: page.id,
        title: props.Title?.title[0]?.plain_text || "Untitled",
        slug: props.Slug?.rich_text[0]?.plain_text || page.id,
        date: props.Date?.date?.start || new Date().toISOString(),
        // Map meta to excerpt as requested by UI needs
        excerpt: props["Meta Description"]?.rich_text[0]?.plain_text || "", 
        // Keep other fields for UI compatibility if they exist, or defaults
        category: props.Category?.select?.name || "General",
        readTime: props.ReadTime?.rich_text[0]?.plain_text || "5 min read",
        image: page.cover?.external?.url || page.cover?.file?.url || "https://picsum.photos/800/400"
      };
    });

    console.log(`[API] Returning ${posts.length} posts:`, posts.map(p => p.title).join(', '));
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

app.get('/api/blog/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    
    // 1. Find the page by slug
    const response = await notionFetch(`databases/${DATABASE_ID}/query`, 'POST', {
      filter: {
        property: 'Slug',
        rich_text: {
          equals: slug
        }
      }
    });

    if (response.results.length === 0) {
      return res.status(404).json({ error: "Post not found" });
    }

    const page: any = response.results[0];
    const pageId = page.id;

    // 2. Fetch page content (blocks)
    const blocksResponse = await notionFetch(`blocks/${pageId}/children`, 'GET');

    // 3. Construct post object
    const props = page.properties;
    const post = {
      id: page.id,
      title: props.Title?.title[0]?.plain_text || "Untitled",
      slug: props.Slug?.rich_text[0]?.plain_text || page.id,
      date: props.Date?.date?.start || new Date().toISOString(),
      category: props.Category?.select?.name || "General",
      image: page.cover?.external?.url || page.cover?.file?.url || null,
      content: blocksResponse.results
    };

    res.json(post);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch post" });
  }
});

// Interactions API
app.get('/api/interactions/:slug', (req, res) => {
  const { slug } = req.params;
  const data = loadInteractions();
  res.json({
    likes: data.likes[slug] || 0,
    comments: data.comments[slug] || []
  });
});

app.post('/api/interactions/:slug/like', (req, res) => {
  const { slug } = req.params;
  const { action } = req.body; // 'like' or 'unlike'
  const data = loadInteractions();
  
  if (!data.likes[slug]) data.likes[slug] = 0;
  
  if (action === 'like') {
    data.likes[slug] += 1;
  } else if (action === 'unlike' && data.likes[slug] > 0) {
    data.likes[slug] -= 1;
  }
  
  saveInteractions(data);
  res.json({ likes: data.likes[slug] });
});

app.post('/api/interactions/:slug/comment', (req, res) => {
  const { slug } = req.params;
  const { user, text } = req.body;
  const data = loadInteractions();
  
  if (!data.comments[slug]) data.comments[slug] = [];
  
  const comment = {
    id: Date.now(),
    user: user || 'Guest User',
    date: 'Just now',
    text
  };
  
  data.comments[slug].unshift(comment);
  saveInteractions(data);
  res.json(comment);
});

// Vite Middleware
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa', 
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files from dist in production
    const distPath = path.join(process.cwd(), 'dist');
    if (fs.existsSync(distPath)) {
      app.use(express.static(distPath));
      // Handle SPA routing
      app.get('*', (req, res, next) => {
        if (req.path.startsWith('/api')) return next();
        res.sendFile(path.join(distPath, 'index.html'));
      });
    }
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Notion Database ID: ${DATABASE_ID}`);
  });
}

startServer();
