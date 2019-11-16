const getFullDictionary = require("../util/getFullDictionary");

module.exports.handler = async ({ body }) => {
  const { words, dictionaryPath } = JSON.parse(body);
  const fullWordList =
    words || getFullDictionary(dictionaryPath || "/usr/share/dict/words");
  const indexOfChosenWord = Math.floor(Math.random() * fullWordList.length);
  const word = fullWordList[indexOfChosenWord];
  console.log("Chosen word: ", word);
  return GenerateSuccess(word);
};

const GenerateSuccess = body => ({
  statusCode: 200,
  body: JSON.stringify(body)
});
