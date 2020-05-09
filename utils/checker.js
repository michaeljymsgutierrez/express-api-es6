// Checker Module
// Generate message string based on data passed

import Helper from "./helper";

const HELPER = new Helper();

class Checker {
  OBJECT(data) {
    // Validate if object properties are not null || empty string
    let fields = [];
    let message = null;
    const objkey = Object.keys(data);

    objkey.forEach(property => {
      if (data[property] === "" || data[property] === null) {
        fields.push(property);
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

    return message ? `${HELPER.CAPITALIZE(message)} can't be blank.` : true;
  }
}

export default Checker;
