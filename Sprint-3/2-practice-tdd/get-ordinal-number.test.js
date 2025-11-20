const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("should return '1st' for 1", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
});

// Case 2: Identify the ordinal number for 2
// When the number is 2,
// Then the function should return "2nd"

test("should return '2nd' for 2", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
});

// Case 3: Identify the ordinal number for 3
// When the number is 3,
// Then the function should return "3rd"

test("should return '3rd' for 3", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
});

// Case 4: Identify the ordinal number for other numbers
// If the last digit of number is not 1, 2, 3
// and the last two digits are not between 11 and 13
// Then the function should return the number with "th" suffix
// otherwise, return the number with the appropriate suffix

test("should return '44th' for 44; '131st' for 131 etc.", () => {
  expect(getOrdinalNumber(44)).toEqual("44th");
  expect(getOrdinalNumber(9)).toEqual("9th");
  expect(getOrdinalNumber(20)).toEqual("20th");
  expect(getOrdinalNumber(100)).toEqual("100th");
  expect(getOrdinalNumber(111)).toEqual("111th");
  expect(getOrdinalNumber(112)).toEqual("112th");
  expect(getOrdinalNumber(113)).toEqual("113th");
  expect(getOrdinalNumber(131)).toEqual("131st");
  expect(getOrdinalNumber(222)).toEqual("222nd");
  expect(getOrdinalNumber(323)).toEqual("323rd");
  expect(getOrdinalNumber(4046486655)).toEqual("4046486655th");
});
