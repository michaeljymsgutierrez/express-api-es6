// Main Start Script

require("babel-register")({
  presets: ["env"]
});

module.exports = require("./server.js");
