/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["sitemap", "stream"],
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
    ];
  },
};

export default nextConfig;
