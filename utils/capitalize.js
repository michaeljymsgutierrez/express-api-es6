// Capitalize String

const CAPITALIZE = text => {
  const capitalize = text.toLocaleLowerCase().split("");
  capitalize[0] = capitalize[0].toLocaleUpperCase();

  return capitalize.join("", ",");
};

export default CAPITALIZE;
