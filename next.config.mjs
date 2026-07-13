/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    qualities: [75, 85]
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.uzairwaseem.com" }],
        destination: "https://uzairwaseem.com/:path*",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
