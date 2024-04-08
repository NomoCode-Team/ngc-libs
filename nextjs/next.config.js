// const TerserPlugin = require('terser-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],

  ...(process.env.NODE_ENV === 'production' && {
    webpack: (config) => {
      const pathsToIgnore = [];

      pathsToIgnore.forEach((path) => {
        config.module.rules.push({
          test: new RegExp(path),
          loader: 'ignore-loader',
        });
      });

      /*
      // Use TerserPlugin to remove comments
      config.optimization.minimizer.push(
        new TerserPlugin({
          terserOptions: {
            format: {
              comments: false, // This will remove all comments
            },
          },
        })
      );
      */

      return config;
    },
  }),
};

module.exports = nextConfig;