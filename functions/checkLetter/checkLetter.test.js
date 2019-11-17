const checkLetter = require("./checkLetter");

const listOfWords = ["hello", "double", "doable", "update"];

describe("Check letter", () => {
  test("Will give user success if no possible words remain", () => {
    const alreadyGuessedLetters = [];
    const hangmanString = "d??ble";
    const letterToCheck = "o";
    const answer = "double";
    const result = checkLetter(
      listOfWords,
      hangmanString,
      letterToCheck,
      answer,
      alreadyGuessedLetters
    );
    expect(result.possibleWords.length).toBeGreaterThan(0);
    expect(result.isLetterSuccessful).toBeTruthy();
    expect(result.possibleWords).toStrictEqual(["double", "doable"]);
  });

  test("Will change word if many words remain", () => {
    const alreadyGuessedLetters = [];
    const hangmanString = "??????";
    const letterToCheck = "b";
    const answer = "double";
    const result = checkLetter(
      listOfWords,
      hangmanString,
      letterToCheck,
      answer,
      alreadyGuessedLetters
    );
    expect(result.possibleWords.length).toBeGreaterThan(0);
    expect(result.isLetterSuccessful).toBeFalsy();
    expect(result.possibleWords).toStrictEqual(["update"]);
  });

  test("Will .... with already guess characters", () => {
    const alreadyGuessedLetters = ["d"];
    const hangmanString = "d?????";
    const letterToCheck = "b";
    const answer = "double";
    const result = checkLetter(
      listOfWords,
      hangmanString,
      letterToCheck,
      answer,
      alreadyGuessedLetters
    );
    expect(result.possibleWords.length).toBeGreaterThan(0);
    expect(result.isLetterSuccessful).toBeFalsy();
    expect(result.possibleWords).toStrictEqual(["doable", "double"]);
  });
});
