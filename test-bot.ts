import https from 'https';

const bots = [
  'Googlebot/2.1 (+http://www.google.com/bot.html)',
  'Mozilla/5.0 (compatible; Bingbot/2.0; +http://www.bing.com/bingbot.htm)',
  'DuckDuckBot/1.0; (+http://duckduckgo.com/duckduckbot.html)',
  'Mozilla/5.0 (compatible; Applebot/0.3; +http://www.apple.com/go/applebot)',
  'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; GPTBot/1.0; +https://openai.com/gptbot',
  'Mozilla/5.0 (compatible; ClaudeBot/1.0; +claudebot@anthropic.com)',
  'PerplexityBot/1.0'
];

async function testBot(userAgent: string) {
  return new Promise((resolve) => {
    const options = {
      hostname: 'noobdev.tech',
      port: 443,
      path: '/',
      method: 'GET',
      headers: {
        'User-Agent': userAgent
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        const isChallenge = data.includes('Verify you are human') || data.includes('Checking your browser') || data.includes('Cloudflare');
        resolve({
          userAgent,
          statusCode: res.statusCode,
          isChallenge,
          contentLength: data.length,
          snippet: data.substring(0, 200).replace(/\n/g, ' ')
        });
      });
    });

    req.on('error', (e) => {
      resolve({ userAgent, error: e.message });
    });

    req.end();
  });
}

async function run() {
  for (const bot of bots) {
    const result: any = await testBot(bot);
    console.log(`[${result.statusCode}] ${result.userAgent.split(' ')[0]} - Challenge: ${result.isChallenge} - Size: ${result.contentLength} - Snippet: ${result.snippet}`);
  }
}

run();
