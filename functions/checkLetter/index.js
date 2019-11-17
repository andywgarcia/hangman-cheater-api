const checkLetter = require("./checkLetter");
const getFullDictionary = require("../util/getFullDictionary");
const defaultDictionaryPath = require("../util/defaultDictionaryPath");

module.exports.handler = async ({ body }) => {
  const {
    hangmanString,
    guessedLetter,
    answer,
    alreadyGuessLetters,
    words,
    dictionaryLocation
  } = JSON.parse(body);
  const listOfWords =
    words || getFullDictionary(dictionaryLocation || defaultDictionaryPath);

  const result = checkLetter(
    listOfWords,
    hangmanString,
    guessedLetter,
    answer,
    alreadyGuessLetters
  );
  return GenerateSuccess(result);
};

const GenerateSuccess = body => ({
  statusCode: 200,
  body: JSON.stringify(body)
});
