// DBAccess Module

import mysql from "mysql";
import ENV from "../../env";

class MySql {
  DBAccess(query, param) {
    let connection = mysql.createConnection({
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
}

export default MySql;
