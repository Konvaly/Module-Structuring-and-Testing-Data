// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue
// the function takes a single parameter, a string representing a playing card
// the function should return the numerical value of the card
// the first test and first case is written for you
// complete the rest of the tests and cases
// write one test at a time, and make it pass, build your solution up methodically
// just make one change at a time -- don't rush -- programmers are deep and careful thinkers
function getCardValue(card) {
  const rank = card.slice(0, -1);
  const cardFace = card.slice(-1);
  const numRank = Number(rank);
  const allowedCardFaces = ["♠", "♣", "♦", "♥"];

  if (!allowedCardFaces.includes(cardFace)) {
    return "Invalid card face.";
  }

  if (rank === "A") {
    return 11;
  }

  if (rank === "10" || rank === "J" || rank === "Q" || rank === "K") {
    return 10;
  }

  if (Number.isInteger(numRank) && numRank >= 2 && numRank <= 9) {
    return numRank;
  } else {
    return "Invalid card rank.";
  }
}

// The line below allows us to load the getCardValue function into tests in other files.
// This will be useful in the "rewrite tests with jest" step.
module.exports = getCardValue;

// You need to write assertions for your function to check it works in different cases
// we're going to use this helper function to make our assertions easier to read
// if the actual output matches the target output, the test will pass
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}
// Acceptance criteria:

// Given a card string in the format "A♠" (representing a card in blackjack - the last character will always be an emoji for a suit, and all characters before will be a number 2-10, or one letter of J, Q, K, A),
// When the function getCardValue is called with this card string as input,
// Then it should return the numerical card value
const aceofSpades = getCardValue("A♠");
assertEquals(aceofSpades, 11);

// Handle Number Cards (2-10):
// Given a card with a rank between "2" and "9",
// When the function is called with such a card,
// Then it should return the numeric value corresponding to the rank (e.g., "5" should return 5).
const fiveofHearts = getCardValue("5♥");
// ====> write your test here, and then add a line to pass the test in the function above

// Handle Face Cards (J, Q, K):
// Given a card with a rank of "10," "J," "Q," or "K",
// When the function is called with such a card,
// Then it should return the value 10, as these cards are worth 10 points each in blackjack.

// Handle Ace (A):
// Given a card with a rank of "A",
// When the function is called with an Ace,
// Then it should, by default, assume the Ace is worth 11 points, which is a common rule in blackjack.

// Handle Invalid Cards:
// Given a card with an invalid rank (neither a number nor a recognized face card),
// When the function is called with such a card,
// Then it should throw an error indicating "Invalid card rank."
const invalidNumberCard = getCardValue("12♥");
assertEquals(invalidNumberCard, "Invalid card rank.");
const invalidFaceCard = getCardValue("5*");
assertEquals(invalidFaceCard, "Invalid card face.");
const invalidFaceCard10 = getCardValue("10$");
assertEquals(invalidFaceCard10, "Invalid card face.");
const invalidFaceCardJack = getCardValue("J%");
assertEquals(invalidFaceCardJack, "Invalid card face.");
const invalidFaceCardQueen = getCardValue("Q£");
assertEquals(invalidFaceCardQueen, "Invalid card face.");
const invalidFaceCardKing = getCardValue("K^");
assertEquals(invalidFaceCardKing, "Invalid card face.");
