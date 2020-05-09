// Helper Module
// Contains string and formatting functions

class Helper {
  validate_email(email) {
    // Validate email string format
    const TESTER = /\S+@\S+\.\S+/;
    return TESTER.test(email);
  }

  capitalize(text) {
    // Capitalize string
    let capitalize = text.toLocaleLowerCase().split("");
    capitalize[0] = capitalize[0].toLocaleUpperCase();
    return capitalize.join("", ",");
  }
}

export default Helper;
