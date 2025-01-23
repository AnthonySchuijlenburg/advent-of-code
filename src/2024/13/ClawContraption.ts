import { getFileContent } from '../../helpers/ReadFromFile.ts';

export function partOne(input: string[]): number {
    return input
        .map((line) => findTokensForPrize(line))
        .reduce((acc, curr) => acc + curr);
}

export function partTwo(input: string[]): number {
    return input
        .map((line) => findTokensForPrize(line, true))
        .reduce((acc, curr) => acc + curr);
}

function findTokensForPrize(
    input: string,
    conversion: boolean = false,
): number {
    const matchRegex = /X\+(\d+),\s*Y\+(\d+)/;
    const splitInput = input.split('\n');
    const [a, b, prize] = [
        splitInput[0]
            .match(matchRegex)
            ?.slice(1, 3)
            .map((n) => Number(n)),
        splitInput[1]
            .match(matchRegex)
            ?.slice(1, 3)
            .map((n) => Number(n)),
        splitInput[2]
            .match(/X=(\d+),\s*Y=(\d+)/)
            ?.slice(1, 3)
            .map((n) => Number(n)),
    ];

    if (conversion) {
        prize![0] = prize![0] + 10000000000000;
        prize![1] = prize![1] + 10000000000000;
    }

    const result = calculateOptimalCombination(prize!, a!, b!);

    if (!result) {
        return 0;
    }

    if (!conversion && (result.x > 100 || result.y > 100)) {
        return 0;
    }

    return result.x * 3 + result.y;
}

function calculateOptimalCombination(
    target: number[],
    a: number[],
    b: number[],
) {
    const [N_x, N_y] = target;
    const [a_x, a_y] = a;
    const [b_x, b_y] = b;

    const denominator = a_y * b_x - a_x * b_y;

    const x = (N_y * b_x - N_x * b_y) / denominator;
    if (x < 0 || !Number.isInteger(x)) {
        return null;
    }

    const y = (N_x - x * a_x) / b_x;
    if (y < 0 || !Number.isInteger(y)) {
        return null;
    }

    return { x, y };
}

function main() {
    const input = getFileContent('2024/13/input.txt');

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
