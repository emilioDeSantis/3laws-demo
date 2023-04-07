const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Set up the reverse proxy for Wix pages
  server.use(
    '/wix/*',
    createProxyMiddleware({
      target: 'https://emilio5139.wixsite.com/test/',
      changeOrigin: true,
      pathRewrite: { '^/wix': '' },
    })
  );

  // Handle all other requests using Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});