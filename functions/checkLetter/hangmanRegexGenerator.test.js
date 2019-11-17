const regexGenerator = require("./hangmanRegexGenerator");

describe("Hangman Regex Generator", () => {
  describe("Regex Match Tester Cases", () => {
    test("Matches successfully", () => {
      const str = "hello";
      const regex = regexGenerator(str);
      expect(str.match(regex)).toBeTruthy();
    });
    test("Matches successfully with non-resolved chracters", () => {
      const hangmanString = "he??o";
      const word = "hello";
      const regex = regexGenerator(hangmanString);
      expect(word.match(regex)).toBeTruthy();
    });
    test("Matches successfully with capitals", () => {
      const hangmanString = "he??o";
      const word = "Hello";
      const regex = regexGenerator(hangmanString);
      expect(word.match(regex)).toBeTruthy();
    });
    test("Rejects successfully", () => {
      const hangmanString = "hello";
      const word = "test";
      const regex = regexGenerator(hangmanString);
      expect(word.match(regex)).toBeFalsy();
    });
    test("Rejects successfully close word", () => {
      const hangmanString = "double";
      const word = "doable";
      const regex = regexGenerator(hangmanString);
      expect(word.match(regex)).toBeFalsy();
    });
    test("Rejects successfully with an exclusion", () => {
      const hangmanString = "do?ble";
      const word = "doable";
      const regex = regexGenerator(hangmanString, ["a"]);
      expect(word.match(regex)).toBeFalsy();
    });

    test("Rejects successfully with a multiple exclusions", () => {
      const hangmanString = "do?ble";
      const word = "doable";
      const regex = regexGenerator(hangmanString, ["ab"]);
      expect(word.match(regex)).toBeFalsy();
    });
  });

  describe("Character Regex Generator", () => {
    test("Generates character regex", () => {
      const generatedRegex = regexGenerator.generateRegexForChar("a");
      expect(generatedRegex).toBe("[a]");
    });

    test("Generates character regex uppercase", () => {
      const generatedRegex = regexGenerator.generateRegexForChar("A");
      expect(generatedRegex).toBe("[a]");
    });

    test("Generates character regex non-resolved(?)", () => {
      const generatedRegex = regexGenerator.generateRegexForChar("?");
      expect(generatedRegex).toBe("[a-z]");
    });
  });

  describe("String Regex Generator", () => {
    test("Generates string regex", () => {
      const generatedRegex = regexGenerator.generateRegexPatternForString(
        "hello"
      );
      expect(generatedRegex).toBe("[h][e][l][l][o]");
    });

    test("Generates string regex with non-resolved", () => {
      const generatedRegex = regexGenerator.generateRegexPatternForString(
        "?ell?"
      );
      expect(generatedRegex).toBe("((?![ell])[a-z])[e][l][l]((?![ell])[a-z])");
    });

    test("Generates string regex with empty array of exclusions", () => {
      const generatedRegex = regexGenerator.generateRegexPatternForString(
        "?ell?",
        []
      );
      expect(generatedRegex).toBe("((?![ell])[a-z])[e][l][l]((?![ell])[a-z])");
    });

    test("Generates string regex with exclusions", () => {
      const generatedRegex = regexGenerator.generateRegexPatternForString(
        "?ell?",
        ["a"]
      );
      expect(generatedRegex).toBe(
        "((?!.*[a].*))(((?![ell])[a-z])[e][l][l]((?![ell])[a-z]))"
      );
    });
  });
});
