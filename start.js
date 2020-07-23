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
          run: "./run",
          query: "./database/query",
          dbaccess: "./database/dbaccess",
          tables: "./database/tables",
          middlewares: "./middlewares"
        }
      }
    ]
  ]
});

module.exports = require("./server.js");
