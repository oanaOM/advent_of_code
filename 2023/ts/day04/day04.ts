// winning numbers | numbers you have
// 1st match = 1p, 2nd match> = 2x card_number

interface ValidCard {
  cardNo?: string;
  noOfMatches: number;
}

export function partOne(data) {
  let sum: number = 0;
  const cards = data.split("\n");
  const myWinnerCards = getWinningCards(cards);

  myWinnerCards.forEach((card) =>
    card.forEach((game, i) => (i === 0 ? (sum += 1) : (sum += 2 ** (i - 1))))
  );

  return sum;
}

const arrayRange = (start, stop, step) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );

export function partTwo(data) {
  const cards = data.split("\n");

  let totalGames: string[] = arrayRange(1, cards.length, 1);
  let originalGames: string[] = totalGames.slice();

  // create a map of the game with the number of valid cards
  const matchingCardsMap: ValidCard[] = [];
  cards.forEach((card) => {
    matchingCardsMap.push(getNumberOfValidMatches(card));
  });

  // parse through the current game
  for (let i = 0; i < totalGames.length - 1; i++) {
    let game = totalGames[i];

    const indexOfGameInOriginalMatch = originalGames.indexOf(game);
    // get number of matching card per game
    const noOfMatchingNumbers = matchingCardsMap[indexOfGameInOriginalMatch];

    if (noOfMatchingNumbers.noOfMatches) {
      const copyCardsArray = originalGames.slice(
        indexOfGameInOriginalMatch + 1,
        noOfMatchingNumbers.noOfMatches + indexOfGameInOriginalMatch + 1
      );

      copyCardsArray.map((card) => totalGames.push(card));
    }
  }

  return totalGames.length;
}

function getWinningCards(cards: string[]): Array<string[]> {
  const myWinnerCards: Array<string[]> = [];
  cards.forEach((card) => {
    const myWinners: string[] = [];
    const numbers = card.split(": ")[1];
    const winningNumbers = numbers.split("|")[0].match(/\d+/g);
    const myNumbers = numbers.split("|")[1].match(/\d+/g);

    winningNumbers.forEach((n, i) => {
      if (myNumbers && myNumbers.includes(n)) {
        myWinners.push(n);
      }
    });

    if (myWinners.length > 0) {
      myWinnerCards.push(myWinners);
    }
  });
  return myWinnerCards;
}

// match: Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
export function getNumberOfValidMatches(card: string): ValidCard {
  let noOfMatches: number = 0;
  const numbers = card.split(": ")[1];
  const cardNo = card.split(": ")[0].split("Card")[1].match(/\d+/g)?.toString();
  const winningNumbers = numbers.split("|")[0].match(/\d+/g);
  const myNumbers = numbers.split("|")[1].match(/\d+/g);

  winningNumbers.forEach((n, i) => {
    if (myNumbers && myNumbers.includes(n)) {
      noOfMatches += 1;
    }
  });

  return { cardNo, noOfMatches };
}
