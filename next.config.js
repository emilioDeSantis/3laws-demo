/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
   
      {
        source: "/api",
        destination: "https://www.3lawsrobotics.io/",
      },
    ];
   },
}

module.exports = nextConfig
