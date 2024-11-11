import { getFileContent } from '../../helpers/ReadFromFile.ts';

export function getSumOfNumbers(input: string): number {
    const data = filterOutAlphabeticalCharacters(input).split('\n');
    let sum = 0;

    for (const row of data) {
        sum += combineFirstAndLast(row);
    }

    return sum;
}

export function filterOutAlphabeticalCharacters(input: string): string {
    return input.replace(/[^0-9\n]/g, '');
}

export function combineFirstAndLast(input: string): number {
    if (input.length === 0) {
        return 0;
    }

    const first = input[0];
    const last = input[input.length - 1];

    return Number(first + last);
}

export function replaceWordsWithNumbers(input: string): string {
    return input
        .replace(/one/g, 'o1e')
        .replace(/two/g, 't2o')
        .replace(/three/g, 't3e')
        .replace(/four/g, 'f4r')
        .replace(/five/g, 'f5e')
        .replace(/six/g, 's6x')
        .replace(/seven/g, 's7n')
        .replace(/eight/g, 'e8t')
        .replace(/nine/g, 'n9e');
}

export function partOne(input: string): number {
    return getSumOfNumbers(input);
}

export function partTwo(input: string): number {
    return getSumOfNumbers(replaceWordsWithNumbers(input));
}

function main() {
    const input = getFileContent('2023/01/input.txt');

    const distancePartOne = partOne(input);
    const distancePartTwo = partTwo(input);

    console.log(`The result of part one is: ${distancePartOne}`);
    console.log(`The result of part two is: ${distancePartTwo}`);
}

if (process.env.NODE_ENV !== 'test') {
    // Only run the main function when not in testing,
    // to speed up pipelines
    main();
}
