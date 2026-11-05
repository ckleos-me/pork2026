import { defineConfig } from 'vite';

// 本番公開URL（末尾スラッシュあり）。canonical / OGP / 構造化データで使用
const SITE_URL = 'https://www.promojp-sg.com/jpork26th/';

export default defineConfig({
  base: './',
  server: {
    port: 5175,
    open: true,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  plugins: [
    {
      // index.html 内の %SITE_URL% を本番URLに置換（OGP画像などは絶対URLが必須のため）
      name: 'site-url',
      transformIndexHtml: (html) => html.replaceAll('%SITE_URL%', SITE_URL),
    },
  ],
});
