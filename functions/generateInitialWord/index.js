const getFullDictionary = require("../util/getFullDictionary");
const defaultDictionaryPath = require("../util/defaultDictionaryPath");

module.exports.handler = async ({ body }) => {
  const { words, dictionaryPath } = JSON.parse(body);
  const fullWordList =
    words || getFullDictionary(dictionaryPath || defaultDictionaryPath);
  const indexOfChosenWord = Math.floor(Math.random() * fullWordList.length);
  const word = fullWordList[indexOfChosenWord];
  console.log("Chosen word: ", word);
  return GenerateSuccess(word);
};

const GenerateSuccess = body => ({
  statusCode: 200,
  body: JSON.stringify(body)
});
