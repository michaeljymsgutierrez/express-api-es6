// Initialize Database Tables

import MYSQL from "../dbaccess";
import QUERY from "../query";

const TABLES = {
  init: function() {
    // Initialize Main Database Tables

    MYSQL.execute(QUERY.createTableUsers, []);
  },

  log: function(tableName, successStatus) {
    // Log Table Creation
    if (successStatus === true) {
      console.log(`  ${tableName}: OK...`);
    } else {
      console.log(`  ${tableName}: FAILED...`);
    }
  }
};

export default TABLES;