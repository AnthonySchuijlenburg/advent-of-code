import { getFileContent } from '../../helpers/ReadFromFile.ts';

export function partOne(input: string[]): number {
    let total = 0;

    for (const string of input) {
        total += string.length;

        const output = string
            .slice(1, -1)
            .replace(/\\\\/g, '\\')
            .replace(/\\"/g, '"')
            .replace(/\\x([0-9A-Fa-f]{2})/g, '_');

        total -= output.length;
    }

    return total;
}

export function partTwo(input: string[]): number {
    let total = 0;

    for (const string of input) {
        total -= string.length;

        const output = string.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
        total += output.length + 2;
    }

    return total;
}

function main() {
    const input: string = getFileContent('2015/08/input.txt');

    const partOneResult = partOne(input.split('\n').filter((s) => !!s));
    const partTwoResult = partTwo(input.split('\n').filter((s) => !!s));

    console.log(`The result of part one is: ${partOneResult}`);
    console.log(`The result of part two is: ${partTwoResult}`);
}

if (process.env.NODE_ENV !== 'test') {
    // Only run the main function when not in testing,
    // to speed up pipelines
    main();
}
