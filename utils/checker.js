// Checker Module
// Generate message string based on data passed

import HELPER from "./helper";

const CHECKER = {
  object: function(data, exclude) {
    // Validate if object properties are not null || empty string
    let fields = [];
    let message = null;

    const objkeys = Object.keys(data);
    const excludeKeys = exclude === null ? [] : exclude.split(",");

    objkeys.forEach(property => {
      if (excludeKeys.indexOf(property) === -1) {
        if (data[property] === "" || data[property] === null) {
          fields.push(property);
        }
      }
    });

    if (fields.length > 1) {
      if (fields.length === 2) {
        message = `${fields[0]} and ${fields[1]}`;
      } else {
        const trimFields = fields.splice(1, fields.length);
        const lastField = fields[fields.length - 1];
        message = `${trimFields.join(", ")} and ${lastField}`;
      }
    } else {
      message = fields[0];
    }

    return message ? `${HELPER.capitalize(message)} can't be blank.` : true;
  }
};

export default CHECKER;
