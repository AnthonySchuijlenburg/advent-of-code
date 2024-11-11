import { getFileContent } from '../../helpers/ReadFromFile.ts';

function calculateSumOfNextValues(input: string): number {
    const values: number[][] = formatData(input);

    return predictNextValues(values).reduce((acc, value) => acc + value, 0);
}

function calculateSumOfPreviousValues(input: string): number {
    const values: number[][] = formatData(input).map((value) =>
        value.reverse(),
    );

    return predictNextValues(values).reduce((acc, value) => acc + value, 0);
}

function formatData(input: string): number[][] {
    return input
        .split('\n')
        .filter((value) => value !== '')
        .map((value) => value.split(' ').map((value) => parseInt(value, 10)));
}

function predictNextValues(values: number[][]): number[] {
    return values.map((value) => {
        return predictNextValue(value);
    });
}

function predictNextValue(values: number[]): number {
    const nextNumbers: number[] = [];

    for (let i = 1; i < values.length; i++) {
        nextNumbers.push(values[i] - values[i - 1]);
    }

    if (nextNumbers.every((value) => value === 0)) {
        return values[values.length - 1] + nextNumbers[nextNumbers.length - 1];
    }

    return predictNextValue(nextNumbers) + values[values.length - 1];
}

export function partOne(input: string): number {
    return calculateSumOfNextValues(input);
}

export function partTwo(input: string): number {
    return calculateSumOfPreviousValues(input);
}

function main() {
    const input = getFileContent('2023/09/input.txt');

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
