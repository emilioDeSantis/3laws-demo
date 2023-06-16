const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express(); // Set up the reverse proxy for Wix pages

    server.use(
        "/api/*",
        createProxyMiddleware({
            target: "https://www.3lawsrobotics.io/",
            changeOrigin: true,
            pathRewrite: { "^/api": "" },
            onProxyRes: (proxyRes) => {
                proxyRes.headers["Access-Control-Allow-Origin"] = "*";
                proxyRes.headers["Access-Control-Allow-Methods"] =
                    "GET, POST, OPTIONS, PUT, DELETE";
                proxyRes.headers["Access-Control-Allow-Headers"] =
                    "Origin, X-Requested-With, Content-Type, Accept, Authorization";
            },
        })
    ); // Handle all other requests using Next.js

    server.all("*", (req, res) => {
        return handle(req, res);
    });

    server.listen(3000, (err) => {
        if (err) throw err;
        console.log("> Ready on http://localhost:3000");
    });
});
