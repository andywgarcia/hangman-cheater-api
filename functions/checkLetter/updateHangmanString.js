module.exports = (hangmanString, guessLetter, answer) => {
  if (hangmanString.length !== answer.length) {
    throw new Exception("The strings are not equivalent in length");
  }
  const result = [...answer].reduce((newString, character, index) => {
    if (hangmanString[index] === "?") {
      return newString + getCharacter(character, guessLetter);
    }
    return newString + character;
  }, "");

  return result;
};

const getCharacter = (character, guessLetter) => {
  if (character === guessLetter) {
    return guessLetter;
  }
  return "?";
};
