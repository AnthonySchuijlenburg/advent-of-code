import { getFileContent } from '../../helpers/ReadFromFile.ts';

export function partOne(input: string[]): number {
    const { valid } = getValidAndInvalidLines(input);

    return valid
        .map((line) => line[Math.floor(line.length / 2)])
        .reduce((acc, curr) => acc + curr, 0);
}

export function partTwo(input: string[]): number {
    const { invalid, rules } = getValidAndInvalidLines(input);
    const validLines: number[][] = [];

    for (const invalidLine of invalid) {
        let { valid, indices } = isLineValid(invalidLine, rules);
        while (!valid) {
            [invalidLine[indices[0]], invalidLine[indices[1]]] = [
                invalidLine[indices[1]],
                invalidLine[indices[0]],
            ];

            ({ valid, indices } = isLineValid(invalidLine, rules));
        }

        validLines.push(invalidLine);
    }

    return validLines
        .map((line) => line[Math.floor(line.length / 2)])
        .reduce((acc, curr) => acc + curr, 0);
}

function getValidAndInvalidLines(input: string[]): {
    valid: number[][];
    invalid: number[][];
    rules: number[][];
} {
    const rules = input[0]
        .split('\n')
        .filter((s) => !!s)
        .map((s) => s.split('|').map((n) => Number(n)));

    const instructions = input[1]
        .split('\n')
        .filter((s) => !!s)
        .map((s) => s.split(',').map((n) => Number(n)));

    const validLines: number[][] = [];
    const invalidLines: number[][] = [];

    for (const line of instructions) {
        if (isLineValid(line, rules).valid) {
            validLines.push(line);
        } else {
            invalidLines.push(line);
        }
    }

    return { valid: validLines, invalid: invalidLines, rules: rules };
}

function isLineValid(
    line: number[],
    rules: number[][],
): { valid: boolean; indices: number[] } {
    const hadRules: number[][] = [];

    for (let i = 0; i < line.length; i++) {
        const relevantRules = rules.filter(
            (arr) => !hadRules.includes(arr) && arr.includes(line[i]),
        );

        for (const relevantRule of relevantRules) {
            hadRules.push(relevantRule);
            if (
                line.includes(relevantRule[0]) &&
                line.includes(relevantRule[1]) &&
                line.indexOf(relevantRule[0]) > line.indexOf(relevantRule[1])
            ) {
                return {
                    valid: false,
                    indices: [
                        line.indexOf(relevantRule[0]),
                        line.indexOf(relevantRule[1]),
                    ],
                };
            }
        }
    }

    return {
        valid: true,
        indices: [],
    };
}

function main() {
    const input = getFileContent('2024/05/input.txt');

    const partOneResult = partOne(input.split('\n\n').filter((s) => !!s));
    const partTwoResult = partTwo(input.split('\n\n').filter((s) => !!s));

    console.log(`The result of part one is: ${partOneResult}`);
    console.log(`The result of part two is: ${partTwoResult}`);
}

if (process.env.NODE_ENV !== 'test') {
    // Only run the main function when not in testing,
    // to speed up pipelines
    main();
}
