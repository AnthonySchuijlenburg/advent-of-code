import { getFileContent } from '../../helpers/ReadFromFile.ts';

export function partOne(input: string[]): number {
    const matchRegex = /mul\((\d{1,3}),(\d{1,3})\)/g;

    let total = 0;
    for (const match of input.join('').matchAll(matchRegex)) {
        total += Number(match[1]) * Number(match[2]);
    }

    return total;
}

export function partTwo(input: string[]): number {
    const matchRegex = /mul\((\d{1,3}),(\d{1,3})\)/g;
    const singleLineInput = input
        .join('_')
        .replace(/(?<=don't\(\)).*?(?=do\(\)|$)/g, '_');

    let total = 0;
    for (const match of singleLineInput.matchAll(matchRegex)) {
        total += Number(match[1]) * Number(match[2]);
    }

    return total;
}

function main() {
    const input = getFileContent('2024/03/input.txt');

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
