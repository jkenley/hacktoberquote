const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");

const nextConfiguration = {
  target: "serverless"
};

module.exports = withPlugins([withImages], nextConfiguration);
