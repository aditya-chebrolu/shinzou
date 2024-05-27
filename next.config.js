/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    config.module.rules.push({
      test: /\.js$/,
      use: [require.resolve("next/dist/build/babel/loader")],
      exclude: /node_modules/,
    });
    return config;
  },

  async rewrites() {
    return [
      {
        source: "/",
        destination: "/v1",
      },
    ];
  },
};

module.exports = nextConfig;
