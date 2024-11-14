import { getFileContent } from '../../helpers/ReadFromFile.ts';

export function partOne(input: string): number {
    const obj = JSON.parse(input);
    return sumValues(obj);
}

export function partTwo(input: string): number {
    const obj = JSON.parse(input);
    return sumValues(obj, true);
}

export function sumValues<T>(
    input: object | Array<T>,
    skipRed: boolean = false,
): number {
    let total = 0;

    for (const value of Object.values(input)) {
        if (Array.isArray(value)) {
            total += sumValues(value, skipRed);
            continue;
        }

        if (skipRed && value === 'red' && !Array.isArray(input)) {
            return 0;
        }

        if (typeof value === 'object') {
            total += sumValues(value, skipRed);
            continue;
        }

        if (typeof value === 'string') {
            continue;
        }

        total += value;
    }

    return total;
}

function main() {
    const input: string = getFileContent('2015/12/input.txt');

    const partOneResult = partOne(input.trim());
    const partTwoResult = partTwo(input.trim());

    console.log(`The result of part one is: ${partOneResult}`);
    console.log(`The result of part two is: ${partTwoResult}`);
}

if (process.env.NODE_ENV !== 'test') {
    // Only run the main function when not in testing,
    // to speed up pipelines
    main();
}
