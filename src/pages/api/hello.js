// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { httpProxyMiddleware } from 'http-proxy-middleware';

export default (req, res) => httpProxyMiddleware(req, res, {
  // You can use the `http-proxy` option
  target:'https://emilio5139.wixsite.com/test',
  // In addition, you can use the `pathRewrite` option provided by `next-http-proxy`
  pathRewrite: {
  '^/api/google':'https://google.com',
  '^/api/myhome':'https://github.com/stegano'
  },
});
