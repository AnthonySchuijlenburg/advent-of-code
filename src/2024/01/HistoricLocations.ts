import { getFileContent } from '../../helpers/ReadFromFile.ts';

export function partOne(input: string[]): number {
    const [a, b] = splitNumbersIntoArrays(input);

    a.sort((a, b) => a - b);
    b.sort((a, b) => a - b);

    let diff = 0;

    for (let i = 0; i < a.length; i++) {
        diff += Math.abs(a[i] - b[i]);
    }

    return diff;
}

export function partTwo(input: string[]): number {
    const [a, b] = splitNumbersIntoArrays(input);
    const bMap: { [key: number]: number } = {};

    for (const num of b) {
        if (!bMap[num]) {
            bMap[num] = 0;
        }

        bMap[num] = bMap[num] + 1;
    }

    let totalSimilarity = 0;

    for (const num of a) {
        const amount = bMap[num] ?? 0;
        totalSimilarity += amount * num;
    }

    return totalSimilarity;
}

function splitNumbersIntoArrays(input: string[]) {
    const splitInput = input
        .map((line) => line.split('   '))
        .flat()
        .map((s) => Number(s));

    const [a, b]: [number[], number[]] = [[], []];

    for (let i = 0; i < splitInput.length; i++) {
        if (i % 2 === 0) {
            a.push(splitInput[i]);
        } else {
            b.push(splitInput[i]);
        }
    }

    return [a, b];
}

function main() {
    const input = getFileContent('2024/01/input.txt');

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
