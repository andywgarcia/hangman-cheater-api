module.exports = hangmanString => {
  const stringRegex = generateRegexPatternForString;
  return new RegExp(stringRegex, [regexFlags.caseInsensitive].join(""));
};

// ((?!.*[].*))([a-z][a][r][a-z][a-z][a-z][a-z][a-z])

const regexFlags = {
  caseInsensitive: "i"
};

const generateRegexPatternForString = (
  hangmanString,
  excludedLetters = null
) => {
  const charArray = [...hangmanString];
  const stringRegex = charArray.reduce((regex, char) => {
    return regex + generateRegexForChar(char);
  }, "");
  if (!excludedLetters) {
    return stringRegex;
  }
  return `((?!.*[${excludedLetters.join("")}].*))(${stringRegex})`;
};

const generateRegexForChar = character => {
  if (character === "?") {
    return "[a-z]";
  }
  return `[${character.toLowerCase()}]`;
};

// Adding for testability
module.exports.generateRegexPatternForString = generateRegexPatternForString;
module.exports.generateRegexForChar = generateRegexForChar;
