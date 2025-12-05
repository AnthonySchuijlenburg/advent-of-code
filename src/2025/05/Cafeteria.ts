import { getFileContent } from '../../helpers/ReadFromFile.ts';

interface Range {
    start: number;
    end: number;
}

export function partOne(input: string[][]): number {
    const ranges = input[0].map((range) => range.split('-').map(Number));
    const ingredients = input[1].map(Number);

    const freshIngredients = [];
    for (const range of ranges) {
        for (const ingredient of ingredients) {
            if (ingredient >= range[0] && ingredient <= range[1]) {
                freshIngredients.push(ingredient);
            }
        }
    }

    return [...new Set(freshIngredients)].length;
}

export function partTwo(input: string[][]): number {
    const ranges: Range[] = input[0]
        .map((range): Range => {
            const splitRange = range.split('-').map(Number);
            return {
                start: splitRange[0],
                end: splitRange[1],
            };
        })
        .sort((a, b) => a.start - b.start);

    let total = 0;
    let min = ranges[0].start;
    let max = ranges[0].end;

    for (let i = 1; i < ranges.length; i++) {
        const current = ranges[i];

        // range already covered
        if (current.end < max) {
            continue;
        }

        if (current.start <= max) {
            max = current.end;
            continue;
        }

        total += max - min + 1;
        min = current.start;
        max = current.end;
    }
    total += max - min + 1;

    return total;
}

function main() {
    const input = getFileContent('2025/05/input.txt');

    const partOneResult = partOne(
        input
            .split('\n\n')
            .filter((s) => !!s)
            .map((line) => line.split('\n')),
    );
    const partTwoResult = partTwo(
        input
            .split('\n\n')
            .filter((s) => !!s)
            .map((line) => line.split('\n')),
    );

    console.log(`The result of part one is: ${partOneResult}`);
    console.log(`The result of part two is: ${partTwoResult}`);
}

if (process.env.NODE_ENV !== 'test') {
    // Only run the main function when not in testing,
    // to speed up pipelines
    main();
}
