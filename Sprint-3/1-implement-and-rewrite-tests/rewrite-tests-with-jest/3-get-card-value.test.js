// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return the numeric value between '2' and '10', corresponding to the rank (e.g., '2' should return 2)", () => {
  const fiveOfHearts = getCardValue("5♥");
  expect(fiveOfHearts).toEqual(5);
});

// Case 3: Handle Face Cards (J, Q, K):
test("should return the value 10, as these cards (J, Q, K) are worth 10 points each in blackjack", () => {
  const jackOfClubs = getCardValue("J♣");
  expect(jackOfClubs).toEqual(10);
  const queenOfSpades = getCardValue("Q♠");
  expect(queenOfSpades).toEqual(10);
  const kingOfHearts = getCardValue("K♥");
  expect(kingOfHearts).toEqual(10);
});

// Case 4: Handle Ace (A):
// Actually, I guess will be better to combine all case tests for aces in one, but case for Ace of Spaces already covered in Case 1
test("should return 11 for a card with a rank of 'A'", () => {
  const aceOfDiamonds = getCardValue("A♦");
  expect(aceOfDiamonds).toEqual(11);
  const aceOfClubs = getCardValue("A♣");
  expect(aceOfClubs).toEqual(11);
  const aceOfHearts = getCardValue("A♥");
  expect(aceOfHearts).toEqual(11);
});

// Case 5: Handle Invalid Cards:
test("should throw an error indicating 'Invalid card rank.' or 'Invalid card face.' when given a card with an invalid rank (neither a number nor a recognized face card)", () => {
  const invalidNumberCard = getCardValue("12♥");
  expect(invalidNumberCard).toEqual("Invalid card rank.");
  const invalidFaceCard = getCardValue("5*");
  expect(invalidFaceCard).toEqual("Invalid card face.");
  const invalidFaceCard10 = getCardValue("10$");
  expect(invalidFaceCard10).toEqual("Invalid card face.");
  const invalidFaceCardJack = getCardValue("J%");
  expect(invalidFaceCardJack).toEqual("Invalid card face.");
  const invalidFaceCardQueen = getCardValue("Q£");
  expect(invalidFaceCardQueen).toEqual("Invalid card face.");
  const invalidFaceCardKing = getCardValue("K^");
  expect(invalidFaceCardKing).toEqual("Invalid card face.");
});
