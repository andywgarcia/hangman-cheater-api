const filterDictionary = require("./filterDictionary");
const updateHangmanString = require("./updateHangmanString");

module.exports = (
  listOfWords,
  hangmanString,
  letterToCheck,
  answer,
  alreadyGuessedCharacters = []
) => {
  const excludedLetters = alreadyGuessedCharacters.filter(character => {
    console.log("hangmanString: ", hangmanString);
    return !hangmanString.includes(character);
  });

  const possibleWords = filterDictionary(listOfWords, hangmanString, [
    ...excludedLetters,
    letterToCheck
  ]);
  if (possibleWords.length > 0) {
    return {
      possibleWords,
      isLetterSuccessful: false,
      hangmanString
    };
  }

  const updatedHangmanString = updateHangmanString(
    hangmanString,
    letterToCheck,
    answer
  );

  const remainingPossibleWords = filterDictionary(
    listOfWords,
    updatedHangmanString,
    excludedLetters
  );
  return {
    possibleWords: remainingPossibleWords,
    isLetterSuccessful: true,
    hangmanString: updatedHangmanString
  };
};
