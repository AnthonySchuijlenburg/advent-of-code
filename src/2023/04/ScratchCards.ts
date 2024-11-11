import { getFileContent } from '../../helpers/ReadFromFile.ts';

export function calculateTotalNumberPoints(input: string[]): number {
    let sum = 0;

    for (const row of input) {
        if (row === '') {
            continue;
        }

        sum += calculateValueOfCard(row);
    }

    return sum;
}

export function calculateValueOfCard(card: string): number {
    const splitCard = card.split(':');
    const cardValue = splitCard[1].split(' | ');

    const winningNumbers = cardValue[0].split(' ').filter(Number);
    const cardNumbers = cardValue[1].split(' ').filter(Number);
    let points = 0;

    for (const cardNumber of cardNumbers) {
        if (winningNumbers.includes(cardNumber)) {
            if (points === 0) {
                points = 1;
            } else {
                points *= 2;
            }
        }
    }

    return points;
}

export function calculateTotalNumberTotalPlayingCards(input: string[]): number {
    const playingCards = new Array(input.length - 1).fill(1);

    for (let i = 0; i < input.length; i++) {
        const row = input[i];
        if (row === '') {
            continue;
        }

        const winnings = calculateWinningsFromCard(row);

        if (winnings > 0) {
            const numberOfCards = playingCards[i];
            for (let j = 1; j < winnings + 1; j++) {
                playingCards[i + j] += numberOfCards;
            }
        }
    }

    return playingCards.reduce((partialSum, a) => partialSum + Number(a), 0);
}

export function calculateWinningsFromCard(card: string): number {
    const splitCard = card.split(':');
    const cardValue = splitCard[1].split(' | ');

    const winningNumbers = cardValue[0].split(' ').filter(Number);
    const cardNumbers = cardValue[1].split(' ').filter(Number);
    let points = 0;

    for (const cardNumber of cardNumbers) {
        if (winningNumbers.includes(cardNumber)) {
            points++;
        }
    }

    return points;
}

export function partOne(input: string): number {
    return calculateTotalNumberPoints(input.split('\n'));
}

export function partTwo(input: string): number {
    return calculateTotalNumberTotalPlayingCards(input.split('\n'));
}

function main() {
    const input = getFileContent('2023/04/input.txt');

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
