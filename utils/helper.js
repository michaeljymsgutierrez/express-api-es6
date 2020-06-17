// Helper Module
// Contains string and formatting functions

const HELPER = {
  validate_email: function(email) {
    // Validate email string format
    const TESTER = /\S+@\S+\.\S+/;

    return TESTER.test(email);
  },

  capitalize: function(text) {
    // Capitalize string
    const capitalize = text.toLocaleLowerCase().split("");
    capitalize[0] = capitalize[0].toLocaleUpperCase();

    return capitalize.join("", ",");
  }
};

export default HELPER;
