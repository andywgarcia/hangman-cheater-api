const filterDictionary = require("./filterDictionary");

const testDictionary = ["hello", "doable", "double"];

describe("Filter dictionary", () => {
  test("Filters successfully without exclusions", () => {
    const hangmanString = "do?ble";
    const result = filterDictionary(testDictionary, hangmanString);
    expect(result).toStrictEqual(["doable", "double"]);
  });
  test("Filters successfully with exclusions", () => {
    const hangmanString = "do?ble";
    const result = filterDictionary(testDictionary, hangmanString, ["a"]);
    expect(result).toStrictEqual(["double"]);
  });
  test("Returns empty array if all is filtered", () => {
    const hangmanString = "do?ble";
    const result = filterDictionary(testDictionary, hangmanString, ["ad"]);
    expect(result).toStrictEqual([]);
  });
});
