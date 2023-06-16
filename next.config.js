/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
   
      {
        source: "/api",
        destination: "https://www.3lawsrobotics.io/",
      },
      {
        source: "/api/:path*",
        destination: "https://www.3lawsrobotics.io/:path*/",
      },
      {
        source: "/_partials/wix-thunderbolt/dist/clientWorker.a5a09964.bundle.min.js",
        destination: "/api/hello",
      },
      {
        source: "/test",
        destination: "/api/hello",
      },
    ];
   },
}

module.exports = nextConfig
