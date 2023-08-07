/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  compress: true,
  images: {
    domains: [
      "backend.ditto.work",
      "backend.ditto.jobs",
      "app.dittohire.com",
      "cdn-dynamic.talent.com",
    ],
    formats: ['image/avif', 'image/webp']
  },
  async rewrites() {
    return [
      {
        source: "/:path((?!api).*)",
        destination: "/DJobs/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
