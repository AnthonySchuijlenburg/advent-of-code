import { getFileContent } from '../../helpers/ReadFromFile.ts';

export function partOne(dimensions: string[]): number {
    let total = 0;

    for (const dimension of dimensions) {
        const splitDimensions = dimension
            .split('x')
            .map(Number)
            .sort((a, b) => a - b);

        total += 2 * splitDimensions[0] * splitDimensions[1];
        total += 2 * splitDimensions[1] * splitDimensions[2];
        total += 2 * splitDimensions[0] * splitDimensions[2];

        total += splitDimensions[0] * splitDimensions[1];
    }

    return total;
}

export function partTwo(dimensions: string[]): number {
    let total = 0;

    for (const dimension of dimensions) {
        const splitDimensions = dimension
            .split('x')
            .map(Number)
            .sort((a, b) => a - b);

        total += 2 * splitDimensions[0];
        total += 2 * splitDimensions[1];

        total += splitDimensions[0] * splitDimensions[1] * splitDimensions[2];
    }

    return total;
}

function main() {
    const input: string = getFileContent('2015/02/input.txt');

    const distancePartOne = partOne(input.split('\n').filter((s) => !!s));
    const distancePartTwo = partTwo(input.split('\n').filter((s) => !!s));

    console.log(`The result of part one is: ${distancePartOne}`);
    console.log(`The result of part two is: ${distancePartTwo}`);
}

if (process.env.NODE_ENV !== 'test') {
    // Only run the main function when not in testing,
    // to speed up pipelines
    main();
}
