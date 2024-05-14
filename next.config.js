/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"]
    });
    return config;
  },

  async rewrites() {
    return [
      {
        source: '/',
        destination: '/v1',
      },
    ]
  }
}

module.exports = nextConfig
