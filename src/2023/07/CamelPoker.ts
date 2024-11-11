import { getFileContent } from '../../helpers/ReadFromFile.ts';
enum HandType {
    HighCard,
    OnePair,
    TwoPairs,
    ThreeOfAKind,
    FullHouse,
    FourOfAKind,
    FiveOfAKind,
}

interface Hand {
    bid: number;
    cards: string[];
    type: HandType;
}

function divideInput(
    input: string,
    callback: (hand: string[]) => HandType,
): Hand[] {
    const hands = input.split('\n').filter((line) => line.length > 0);

    return hands.map((hand) => {
        const handArray = hand.split(' ');
        const handObject: Hand = {
            bid: parseInt(handArray[1]),
            cards: handArray[0].split(''),
            type: callback(handArray[0].split('')),
        };

        return handObject;
    });
}

function sortInput(
    hands: Hand[],
    highestFirstCard: (a: Hand, b: Hand) => number,
): Hand[] {
    return hands.sort((a: Hand, b: Hand): number => {
        if (a.type !== b.type) {
            return a.type - b.type;
        }
        return highestFirstCard(a, b);
    });
}

function calculateHandType(cards: string[]): HandType {
    const cardCount = cards.reduce(
        (cardsFound: { [key: string]: number }, cardValue: string) => {
            if (!cardsFound[cardValue]) {
                cardsFound[cardValue] = 0;
            }

            cardsFound[cardValue]++;

            return cardsFound;
        },
        {},
    );

    const cardCountValues = Object.values(cardCount);

    if (cardCountValues.includes(5)) {
        return HandType.FiveOfAKind;
    }

    if (cardCountValues.includes(4)) {
        return HandType.FourOfAKind;
    }

    if (cardCountValues.includes(3) && cardCountValues.includes(2)) {
        return HandType.FullHouse;
    }

    if (cardCountValues.includes(3)) {
        return HandType.ThreeOfAKind;
    }

    if (cardCountValues.filter((value) => value === 2).length === 2) {
        return HandType.TwoPairs;
    }

    if (cardCountValues.includes(2)) {
        return HandType.OnePair;
    }

    return HandType.HighCard;
}

function calculateHandTypeWithJokers(cards: string[]): HandType {
    if (!cards.includes('J')) {
        return calculateHandType(cards);
    }

    const cardCount = cards.reduce(
        (cardsFound: { [key: string]: number }, cardValue: string) => {
            if (!cardsFound[cardValue]) {
                cardsFound[cardValue] = 0;
            }

            cardsFound[cardValue]++;

            return cardsFound;
        },
        {},
    );

    let highestNonJoker = '';

    Object.keys(cardCount).forEach((key) => {
        if (key === 'J') {
            return;
        }

        if (highestNonJoker === '') {
            highestNonJoker = key;
            return;
        }

        highestNonJoker =
            cardCount[key] > cardCount[highestNonJoker] ? key : highestNonJoker;
    });

    const replacedCards = cards.map((card) =>
        card === 'J' ? highestNonJoker : card,
    );
    return calculateHandType(replacedCards);
}

function getHighestFirstCard(handA: Hand, handB: Hand): number {
    const cards: string[] = [
        'A',
        'K',
        'Q',
        'J',
        'T',
        '9',
        '8',
        '7',
        '6',
        '5',
        '4',
        '3',
        '2',
    ];

    for (let i = 0; i < handA.cards.length; i++) {
        if (handA.cards[i] !== handB.cards[i]) {
            return (
                cards.indexOf(handB.cards[i]) - cards.indexOf(handA.cards[i])
            );
        }
    }

    return 0;
}

function getHighestIgnoreJokers(handA: Hand, handB: Hand): number {
    const cards: string[] = [
        'A',
        'K',
        'Q',
        'T',
        '9',
        '8',
        '7',
        '6',
        '5',
        '4',
        '3',
        '2',
        'J',
    ];

    for (let i = 0; i < handA.cards.length; i++) {
        if (handA.cards[i] !== handB.cards[i]) {
            return (
                cards.indexOf(handB.cards[i]) - cards.indexOf(handA.cards[i])
            );
        }
    }

    return 0;
}

function calculateTotalWinnings(hands: Hand[]): number {
    return hands.reduce((total: number, hand: Hand) => {
        return total + (hands.indexOf(hand) + 1) * hand.bid;
    }, 0);
}

export function partOne(input: string): number {
    return calculateTotalWinnings(
        sortInput(divideInput(input, calculateHandType), getHighestFirstCard),
    );
}

export function partTwo(input: string): number {
    return calculateTotalWinnings(
        sortInput(
            divideInput(input, calculateHandTypeWithJokers),
            getHighestIgnoreJokers,
        ),
    );
}

function main() {
    const input = getFileContent('2023/07/input.txt');

    const partOneResult = partOne(input);
    const partTwoResult = partTwo(input);

    console.log(`The result of part one is: ${partOneResult}`);
    console.log(`The result of part two is: ${partTwoResult}`);
}

if (process.env.NODE_ENV !== 'test') {
    // Only run the main function when not in testing,
    // to speed up pipelines
    main();
}
