const GetDictionary = require("./getDictionary");
const path = "/usr/share/dict/words";

module.exports.handler = async event => {
  const wordDictionary = await GetDictionary(path);
  return GenerateSuccess(wordDictionary);
};

const GenerateSuccess = body => ({
  statusCode: 200,
  body: JSON.stringify(body)
});
