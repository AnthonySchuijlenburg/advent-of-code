import { getFileContent } from '../../helpers/ReadFromFile.ts';

export function partOne(input: string[]): number {
    let repeatingSum = 0;

    for (const range of input) {
        const start = Number(range.split('-')[0]);
        const end = Number(range.split('-')[1]);

        for (let i = start; i <= end; i++) {
            const iString = '' + i;
            const left = iString.substring(0, iString.length / 2);
            const right = iString.substring(iString.length / 2);

            if (left === right) {
                repeatingSum += Number(i);
            }
        }
    }

    return repeatingSum;
}

export function partTwo(input: string[]): number {
    let repeatingSum = 0;

    for (const range of input) {
        const start = Number(range.split('-')[0]);
        const end = Number(range.split('-')[1]);

        for (let i = start; i <= end; i++) {
            const iString = '' + i;
            for (let j = 1; j < iString.length; j++) {
                const check = iString.substring(0, j);
                const test = iString.substring(j);
                const repeating = check.repeat(
                    Math.ceil(test.length / check.length),
                );

                if (repeating === test) {
                    repeatingSum += Number(i);
                    break;
                }
            }
        }
    }

    return repeatingSum;
}

function main() {
    const input = getFileContent('2025/02/input.txt');

    const partOneResult = partOne(input.split(',').filter((s) => !!s));
    const partTwoResult = partTwo(input.split(',').filter((s) => !!s));

    console.log(`The result of part one is: ${partOneResult}`);
    console.log(`The result of part two is: ${partTwoResult}`);
}

if (process.env.NODE_ENV !== 'test') {
    // Only run the main function when not in testing,
    // to speed up pipelines
    main();
}
