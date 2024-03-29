/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_SERVER: process.env.API_SERVER,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });
    return config;
  },
  webpackDevMiddleware: (config) => {
    console.log("Webpack config");

    return config;
  },
};

module.exports = nextConfig;
