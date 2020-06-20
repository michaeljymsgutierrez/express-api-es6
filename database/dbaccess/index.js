// DBAccess Module

import mysql from "mysql";
import ENV from "../../env";

const MYSQL = {
  execute: function(query, param) {
    const connection = mysql.createConnection({
      host: ENV.db_host,
      user: ENV.db_user,
      password: ENV.db_pass,
      database: ENV.db_name
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
