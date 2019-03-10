/**
 * Main Entry Point for Es version
 */

require("babel-register")({
  presets: ["env"]
});

module.exports = require("./server.js");
