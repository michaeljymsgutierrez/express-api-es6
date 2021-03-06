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
          endpoints: "./endpoints",
          queries: "./database/queries",
          dbaccess: "./database/dbaccess",
          tables: "./database/tables",
          middlewares: "./middlewares",
          utils: "./utils"
        }
      }
    ]
  ]
});

module.exports = require("./server.js");
