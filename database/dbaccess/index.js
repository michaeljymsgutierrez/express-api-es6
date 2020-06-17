// DBAccess Module

import mysql from "mysql";
import ENV from "../../env";

const MYSQL = {
  execute: function(query, param) {
    const connection = mysql.createConnection({
      host: ENV.dbhost,
      user: ENV.dbuser,
      password: ENV.dbpass,
      database: ENV.dbname
    });

    const promise = new Promise((resolve, reject) => {
      connection.connect();
      connection.query(query, param, function(error, results, fields) {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
      connection.end();
    });

    return promise;
  }
};

export default MYSQL;
