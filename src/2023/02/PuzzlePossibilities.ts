import { getFileContent } from '../../helpers/ReadFromFile.ts';

const redCubes = 12;
const greenCubes = 13;
const blueCubes = 14;

interface RowResult {
    rowResult: boolean;
    rowNumber: number;
}

export function calculateSumOfImpossibleRows(input: string): number {
    const rows = input.split('\n');
    let sum = 0;

    for (const row of rows) {
        if (row === '') {
            continue;
        }

        const rowResult: RowResult = isRowPossible(row);

        if (rowResult.rowResult) {
            sum += rowResult.rowNumber;
        }
    }

    return sum;
}

export function isRowPossible(row: string): RowResult {
    const formattedRow = row.split(': ');
    const gameNumber = formattedRow[0].replace('Game ', '');
    const gameContent = formattedRow[1].split('; ');

    for (const game of gameContent) {
        if (!isGamePossible(game)) {
            return { rowResult: false, rowNumber: Number(gameNumber) };
        }
    }

    return { rowResult: true, rowNumber: Number(gameNumber) };
}

export function isGamePossible(game: string): boolean {
    const moves = game.split(', ');

    for (let move of moves) {
        if (move.includes('blue')) {
            move = move.replace(' blue', '');
            if (Number(move) > blueCubes) {
                return false;
            }
        }

        if (move.includes('green')) {
            move = move.replace(' green', '');
            if (Number(move) > greenCubes) {
                return false;
            }
        }

        if (move.includes('red')) {
            move = move.replace(' red', '');
            if (Number(move) > redCubes) {
                return false;
            }
        }
    }

    return true;
}

export function calculatePowerOfRows(input: string): number {
    const rows = input.split('\n');
    let power = 0;

    for (const row of rows) {
        if (row === '') {
            continue;
        }

        power += calculatePowerOfASingleRow(row);
    }

    return power;
}

export function calculatePowerOfASingleRow(row: string): number {
    const splitRow = row.split(': ');
    const games = splitRow[1].split('; ');

    let minValueOfRedCubes = 0;
    let minValueOfGreenCubes = 0;
    let minValueOfBlueCubes = 0;

    for (const game of games) {
        const rounds = game.split(', ');
        for (let round of rounds) {
            if (round.includes('blue')) {
                round = round.replace(' blue', '');
                const numberOfCubes = Number(round);
                minValueOfBlueCubes =
                    numberOfCubes > minValueOfBlueCubes
                        ? numberOfCubes
                        : minValueOfBlueCubes;
            }

            if (round.includes('red')) {
                round = round.replace(' red', '');
                const numberOfCubes = Number(round);
                minValueOfRedCubes =
                    numberOfCubes > minValueOfRedCubes
                        ? numberOfCubes
                        : minValueOfRedCubes;
            }

            if (round.includes('green')) {
                round = round.replace(' green', '');
                const numberOfCubes = Number(round);
                minValueOfGreenCubes =
                    numberOfCubes > minValueOfGreenCubes
                        ? numberOfCubes
                        : minValueOfGreenCubes;
            }
        }
    }

    return minValueOfBlueCubes * minValueOfRedCubes * minValueOfGreenCubes;
}

export function partOne(input: string): number {
    return calculateSumOfImpossibleRows(input);
}

export function partTwo(input: string): number {
    return calculatePowerOfRows(input);
}

function main() {
    const input = getFileContent('2023/02/input.txt');

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
