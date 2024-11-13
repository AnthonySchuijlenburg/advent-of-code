import { getFileContent } from '../../helpers/ReadFromFile.ts';

export function partOne(input: string): number {
    return doRounds(input).length;
}

export function partTwo(input: string): number {
    return doRounds(input, 50).length;
}

export function doRounds(start: string, rounds: number = 40): string {
    for (let i = 0; i < rounds; i++) {
        let newString = '';
        let currentChar = start[0];
        let currentCount = 1;

        for (let j = 1; j < start.length; j++) {
            if (start[j] !== currentChar) {
                newString += `${currentCount}${currentChar}`;
                currentCount = 1;
                currentChar = start[j];
                continue;
            }

            currentCount++;
        }

        start = newString + `${currentCount}${currentChar}`;
    }

    return start;
}

function main() {
    const input: string = getFileContent('2015/10/input.txt');

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
