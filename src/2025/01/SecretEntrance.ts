import { getFileContent } from '../../helpers/ReadFromFile.ts';

interface Direction {
    direction: 'L' | 'R';
    value: number;
}

export function partOne(input: string[]): number {
    const directions = formatInput(input);

    let currentPosition = 50;
    let zeroCount = 0;

    for (const direction of directions) {
        currentPosition +=
            direction.value * (direction.direction === 'L' ? -1 : 1);

        while (currentPosition >= 100) {
            currentPosition -= 100;
        }

        while (currentPosition < 0) {
            currentPosition += 100;
        }

        if (currentPosition === 0) {
            zeroCount += 1;
        }
    }

    return zeroCount;
}

export function partTwo(input: string[]): number {
    const directions = formatInput(input);

    let currentPosition = 50;
    let zeroCount = 0;

    for (const direction of directions) {
        for (let i = 0; i < direction.value; i++) {
            currentPosition += 1 * (direction.direction === 'L' ? -1 : 1);

            if (currentPosition === 100) {
                currentPosition = 0;
            } else if (currentPosition === -1) {
                currentPosition = 99;
            }

            if (currentPosition === 0) {
                zeroCount += 1;
            }
        }
    }

    return zeroCount;
}

function formatInput(input: string[]): Array<Direction> {
    return input.map((line) => {
        const direction: 'R' | 'L' = line.substring(0, 1) as 'R' | 'L';
        const value = Number(line.substring(1, line.length));
        return { direction, value };
    });
}

function main() {
    const input = getFileContent('2025/01/input.txt');

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
