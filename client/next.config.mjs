/** @type {import('next').NextConfig} */

const SERVER_URL = process.env.SERVER_URL;

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${SERVER_URL}/:path*`, // Proxy to Backend
      },
    ];
  },
};

export default nextConfig;
