import { getFileContent } from '../../helpers/ReadFromFile.ts';

export function partOne(input: string[]): number {
    return runPossibilities(input);
}

export function partTwo(input: string[]): number {
    return runPossibilities(input, ['*', '+', '|']);
}

function runPossibilities(
    input: string[],
    operators: string[] = ['*', '+'],
): number {
    let valid = 0;

    for (const line of input) {
        const result = Number(line.split(': ')[0]);
        const range = line
            .split(': ')[1]
            .split(' ')
            .map((s) => Number(s));

        const possibilities = getAllPossibilities(
            operators.length ** (range.length - 1),
            operators,
        );

        for (const possibility of possibilities) {
            let total = range[0];
            for (let i = 0; i < possibility.length; i++) {
                if (possibility[i] === '*') {
                    total *= range[i + 1];
                } else if (possibility[i] === '+') {
                    total += range[i + 1];
                } else {
                    total = Number('' + total + range[i + 1]);
                }

                if (total > result) {
                    break;
                }
            }

            if (total === result) {
                valid += result;
                break;
            }
        }
    }

    return valid;
}

function getAllPossibilities(amount: number, operators: string[] = ['*', '+']) {
    const possibilities: string[] = [];
    const amountBin = amount.toString(operators.length);

    for (let i = 0; i < amount; i++) {
        const iBin = i
            .toString(operators.length)
            .padStart(amountBin.length - 1, '0');

        possibilities.push(
            iBin
                .split('')
                .map((index) => operators[Number(index)])
                .join(''),
        );
    }

    return possibilities;
}

function main() {
    const input = getFileContent('2024/07/input.txt');

    const partOneResult = partOne(input.split('\n').filter((s) => !!s));
    const partTwoResult = partTwo(input.split('\n').filter((s) => !!s));

    console.log(`The result of part one is: ${partOneResult}`);
    console.log(`The result of part two is: ${partTwoResult}`);
}

if (process.env.NODE_ENV !== 'test') {
    const start = Date.now();
    // Only run the main function when not in testing,
    // to speed up pipelines
    main();
    console.log(
        `Which took; ${Date.now() - start}ms/${(Date.now() - start) / 1000}s`,
    );
}
