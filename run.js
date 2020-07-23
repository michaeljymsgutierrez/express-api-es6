import https from "https";
import fs from "fs";
import ENV from "env";

const RUN = {
  server: function(app) {
    // Config for running express/node server DEV || PROD

    if (ENV.mode && ENV.mode === "development") {
      app.listen(ENV.port, ENV.host, () => {
        console.log(
          `\n  ====================================================\n  = STATUS : ${ENV.mode.toUpperCase()} MODE\n  = SERVER : http://${
            ENV.host
          }:${
            ENV.port
          }\n  = STARTED: ${new Date()}  \n  ====================================================`
        );
      });
    } else if (ENV.mode === "production") {
      // SSL Directory for production
      const sslOptions = {
        key: fs.readFileSync(`${ENV.ssl_directory}/key.pem`),
        cert: fs.readFileSync(`${ENV.ssl_directory}/cert.pem`)
      };

      https.createServer(sslOptions, app).listen(ENV.port, ENV.host, () => {
        console.log(
          `\n  ====================================================\n  = STATUS: ${ENV.mode.toUpperCase()} MODE\n  = SERVER: http://${
            ENV.host
          }:${
            ENV.port
          }\n  = STARTED: ${new Date()}  \n  ====================================================`
        );
      });
    }
  }
};

export default RUN;
