const checkLetter = require("./checkLetter");
const getFullDictionary = require("../util/getFullDictionary");

module.exports.handler = async ({ body }) => {
  const {
    hangmanString,
    guessedLetter,
    answer,
    excludedLetters,
    words,
    dictionaryLocation
  } = JSON.parse(body);
  const listOfWords =
    words || getFullDictionary(dictionaryLocation || "/usr/share/dict/words");

  const result = checkLetter(
    listOfWords,
    hangmanString,
    guessedLetter,
    answer,
    excludedLetters
  );
  return GenerateSuccess(result);
};

const GenerateSuccess = body => ({
  statusCode: 200,
  body: JSON.stringify(body)
});
