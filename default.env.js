// Default Environment Configuration

import ip from "ip";

let ENV = {
  mode: "development",
  port: "3000",
  host: "127.0.0.1",
  dbhost: "localhost",
  dbuser: "dbuser",
  dbname: "dbname",
  dbpass: "dbpass",
  ssl_directory: null,
  secret_key: "secretkey"
};

// Override values here if necessary

if (ENV.mode === "development") {
  ENV.port = "3000";
  ENV.host = "127.0.0.1";
} else if (ENV.mode === "production") {
  ENV.port = "8080";
  ENV.host = ip.address();
  // SSL directory is where you ssl key and cert pem lives
  ENV.ssl_directory = null;
}

export default ENV;
