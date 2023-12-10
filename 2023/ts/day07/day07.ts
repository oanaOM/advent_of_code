export function partOne(data) {
  const labels = ["A", "K", "Q", "J", "T", 9, 8, 7, 6, 5, 4, 3, 2];

  let sum: number = 0;
  const cards = data.split("\n");

  return sum;
}

const strengths = [
  "five_of_kind",
  "four_of_kind",
  "three_of_kind",
  "two_pair",
  "one_pair",
  "high_card",
];

export function handStrength(cards: string) {
  const noOfCards = {};
  let strength = 0;
  cards.split("").map((card) => {
    if (noOfCards[card]) {
      noOfCards[card] = noOfCards[card] + 1;
    } else {
      noOfCards[card] = 1;
    }

    switch (Object.keys(noOfCards).length) {
      case 1:
        strength = 7;
        break;
      case 2:
        if (
          Object.values(noOfCards).includes(4) &&
          Object.values(noOfCards).includes(1)
        ) {
          strength = 6;
        } else if (
          Object.values(noOfCards).includes(3) &&
          Object.values(noOfCards).includes(2)
        ) {
          strength = 5;
        }
        break;

      case 3:
        if (
          Object.values(noOfCards).includes(3) &&
          Object.values(noOfCards).includes(1) &&
          Object.values(noOfCards).includes(1)
        ) {
          strength = 4;
        } else if (
          Object.values(noOfCards).includes(2) &&
          Object.values(noOfCards).includes(2) &&
          Object.values(noOfCards).includes(1)
        ) {
          strength = 3;
        }
        break;

      case 4:
        if (
          Object.values(noOfCards).includes(2) &&
          Object.values(noOfCards).includes(1) &&
          Object.values(noOfCards).includes(1) &&
          Object.values(noOfCards).includes(1)
        ) {
          strength = 2;
        }
        break;
      case 5:
        strength = 1;
        break;

      default:
        break;
    }
  });

  console.log("---noOfCards", noOfCards, strength);
  return strength;
}
