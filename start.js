// Main Start Script

require("@babel/register")({
  presets: ["@babel/preset-env"],
  plugins: [
    "@babel/plugin-transform-runtime",
    [
      "babel-plugin-module-resolver",
      {
        root: ["./"],
        alias: {
          env: "./env",
          dbaccess: "./database/dbaccess",
          query: "./database/query"
        }
      }
    ]
  ]
});

module.exports = require("./server.js");
