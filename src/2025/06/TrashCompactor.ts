import { getFileContent } from '../../helpers/ReadFromFile.ts';

export function partOne(input: string[]): number {
    const splitInput = input.map((line) =>
        line.trim().replace(/\s+/g, ' ').split(' '),
    );
    let total = 0;

    for (let i = 0; i < splitInput[0].length; i++) {
        const line: string[] = [];
        for (let j = 0; j < splitInput.length; j++) {
            line.push(splitInput[j][i]);
        }

        const operation = line[line.length - 1] as '+' | '*';
        const nums: number[] = line.slice(0, line.length - 1).map(Number);

        total += nums.reduce(
            (acc, curr) => {
                if (operation === '+') return acc + curr;
                return acc * curr;
            },
            operation === '+' ? 0 : 1,
        );
    }

    return total;
}

export function partTwo(input: string[]): number {
    const problems: string[][] = [];

    let currentProblem: string[] = [];
    let currentColumn: string[] = [];
    for (let i = 0; i < input[0].length; i++) {
        currentColumn = [];
        for (let j = 0; j < input.length; j++) {
            currentColumn.push(input[j][i]);
        }

        if (currentColumn.every((char) => char === ' ')) {
            problems.push(currentProblem);
            currentProblem = [];
            continue;
        }

        for (let j = 0; j < input.length; j++) {
            currentProblem[j] = (currentProblem[j] ?? '') + currentColumn[j];
        }
    }
    if (currentProblem.length > 0) problems.push(currentProblem);

    let total = 0;
    for (const problem of problems) {
        const numbers: number[] = [];
        let operation: '*' | '+' | null = null;

        for (let i = 0; i < problem[0].length; i++) {
            let num = '';
            for (let j = 0; j < problem.length; j++) {
                const curr = problem[j][problem[j].length - i - 1];
                if (curr !== ' ' && curr !== '*' && curr !== '+') {
                    num += curr;
                    continue;
                }

                if (curr === '*' || curr === '+') {
                    operation = curr as '*' | '+';
                }
            }

            numbers.push(Number(num));
        }

        if (!operation)
            throw new Error(
                'This should not happen, check trailing whitespace',
            );

        total += numbers.reduce(
            (acc, curr) => {
                if (operation === '+') return acc + curr;
                return acc * curr;
            },
            operation === '+' ? 0 : 1,
        );
    }

    return total;
}

function main() {
    const input = getFileContent('2025/06/input.txt');

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
