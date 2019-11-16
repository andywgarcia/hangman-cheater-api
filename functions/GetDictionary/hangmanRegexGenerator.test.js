const regexGenerator = require("./hangmanRegexGenerator");

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
    expect(generatedRegex).toBe("[a-z][e][l][l][a-z]");
  });

  test("Generates string regex with exclusions", () => {
    const generatedRegex = regexGenerator.generateRegexPatternForString(
      "?ell?",
      ["a"]
    );
    expect(generatedRegex).toBe("((?!.*[a].*))([a-z][e][l][l][a-z])");
  });
});
