const Dotenv = require("dotenv-webpack");

module.exports = {
  distDir: '../../dist/functions/next',
  webpack(config) {
    // url loader
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg)$/,
      use: {
        loader: 'url-loader'
      }
    });

    // Add the new plugin to the existing webpack plugins
    config.plugins.push(new Dotenv({ silent: true }));

    return config;
  },
}
