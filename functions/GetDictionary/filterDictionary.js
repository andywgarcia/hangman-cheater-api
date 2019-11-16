const RegExGenerator = require("./hangmanRegexGenerator");

module.exports = (listOfWords, hangmanString) => {
  const regex = RegExGenerator(hangmanString);
  listOfWords.filter(word => {
    return word.match(regex);
  });
};
