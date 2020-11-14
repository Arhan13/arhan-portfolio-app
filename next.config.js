const path = require("path");

module.exports = {
  //Handled by nextjs
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
};
