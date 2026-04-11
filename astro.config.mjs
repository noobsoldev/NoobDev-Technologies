import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  integrations: [
    react()
  ],
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  vite: {
    plugins: [
      tailwindcss()
    ],
    resolve: {
      alias: {
        'react-router-dom': path.resolve(__dirname, './src/react-router-shim.tsx')
      }
    }
  }
});
