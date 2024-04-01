/** @type {import('next').NextConfig} */

const isProd=process.env.NODE_ENV === "production"

const getImagesConfig=()=>isProd?{
  loader:'custom',
  loaderFile:'./src/image-loader.js'
}:{}

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  // images:{
  //   unoptimized:true
  // },
  // output:'export',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
}

module.exports = nextConfig
