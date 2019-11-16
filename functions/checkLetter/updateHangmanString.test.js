const updateHangmanString = require("./updateHangmanString");

describe("Update Hangman String", () => {
  test("Success replaces the correct letter", () => {
    const hangmanString = "do?b?e";
    const letterToCheck = "a";
    const answer = "doable";
    const expectedResult = "doab?e";
    const result = updateHangmanString(hangmanString, letterToCheck, answer);
    expect(result).toBe(expectedResult);
  });

  test("Success replaces the correct letter with double letter", () => {
    const hangmanString = "le??e?";
    const letterToCheck = "t";
    const answer = "letter";
    const expectedResult = "lette?";
    const result = updateHangmanString(hangmanString, letterToCheck, answer);
    expect(result).toBe(expectedResult);
  });

  test("Success replaces the correct letter with double letter spread apart", () => {
    const hangmanString = "l?tt??";
    const letterToCheck = "e";
    const answer = "letter";
    const expectedResult = "lette?";
    const result = updateHangmanString(hangmanString, letterToCheck, answer);
    expect(result).toBe(expectedResult);
  });

  test("Does not replace the letter when nothing to replace", () => {
    const hangmanString = "le??e?";
    const letterToCheck = "x";
    const answer = "letter";
    const expectedResult = hangmanString;
    const result = updateHangmanString(hangmanString, letterToCheck, answer);
    expect(result).toBe(expectedResult);
  });
});
