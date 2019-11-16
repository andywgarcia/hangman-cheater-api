const checkLetter = require("./checkLetter");

const listOfWords = ["hello", "double", "doable", "update"];

describe("Check letter", () => {
  test("Will give user success if no possible words remain", () => {
    const excludedLetters = [];
    const hangmanString = "d??ble";
    const letterToCheck = "o";
    const answer = "double";
    const result = checkLetter(
      listOfWords,
      hangmanString,
      letterToCheck,
      answer,
      excludedLetters
    );
    expect(result.possibleWords.length).toBeGreaterThan(0);
    expect(result.isLetterSuccessful).toBeTruthy();
    expect(result.possibleWords).toStrictEqual(["double", "doable"]);
  });

  test("Will change word if many words remain", () => {
    const excludedLetters = [];
    const hangmanString = "??????";
    const letterToCheck = "b";
    const answer = "double";
    const result = checkLetter(
      listOfWords,
      hangmanString,
      letterToCheck,
      answer,
      excludedLetters
    );
    expect(result.possibleWords.length).toBeGreaterThan(0);
    expect(result.isLetterSuccessful).toBeFalsy();
    expect(result.possibleWords).toStrictEqual(["update"]);
  });
});
