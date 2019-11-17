module.exports = (hangmanString, excludedLettersArray = null) => {
  const stringRegex = generateRegexPatternForString(
    hangmanString,
    excludedLettersArray
  );
  return new RegExp(stringRegex, [regexFlags.caseInsensitive].join(""));
};

// ((?!.*[].*))([a-z][a-z][a-z][a-z][a-z])

const regexFlags = {
  caseInsensitive: "i"
};

const generateRegexPatternForString = (
  hangmanString,
  excludedLettersArray = null
) => {
  console.log("Hangman String: ", hangmanString);
  const charArray = [...hangmanString];
  const successfulCharacters = [...hangmanString].filter(
    character => character !== "?"
  );
  console.log("Successful Characters: ", successfulCharacters);
  const stringRegex = charArray.reduce((regex, char) => {
    return regex + generateRegexForChar(char, successfulCharacters);
  }, "");
  if (!excludedLettersArray || excludedLettersArray.length === 0) {
    return stringRegex;
  }
  return `((?!.*[${excludedLettersArray.join("")}].*))(${stringRegex})`;
};

const generateRegexForChar = (character, successfulCharacters = []) => {
  if (character === "?") {
    if (successfulCharacters.length > 0) {
      return `((?![${successfulCharacters.join("")}])[a-z])`;
    }
    return `[a-z]`;
  }
  return `[${character.toLowerCase()}]`;
};

// Adding for testability
module.exports.generateRegexPatternForString = generateRegexPatternForString;
module.exports.generateRegexForChar = generateRegexForChar;
