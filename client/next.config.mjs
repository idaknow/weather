/** @type {import('next').NextConfig} */

const SERVER_HOST = process.env.SERVER_HOST;
const SERVER_PORT = process.env.SERVER_PORT;

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `http://${SERVER_HOST}:${SERVER_PORT}/:path*`, // Proxy to Backend
      },
    ];
  },
};

export default nextConfig;
