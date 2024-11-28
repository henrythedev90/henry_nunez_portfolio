const { webpack } = require("next/dist/compiled/webpack/webpack");

module.exports = {
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
};
