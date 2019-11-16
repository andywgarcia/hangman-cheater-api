const RegExGenerator = require("./hangmanRegexGenerator");

module.exports = (listOfWords, hangmanString, excludedLettersArray = null) => {
  const regex = RegExGenerator(hangmanString, excludedLettersArray);
  return listOfWords.filter(word => {
    return word.length === hangmanString.length && word.match(regex);
  });
};
