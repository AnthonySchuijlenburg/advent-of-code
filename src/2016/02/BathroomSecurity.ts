import { getFileContent } from '../../helpers/ReadFromFile.ts';

type Digit = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 'A' | 'B' | 'C' | 'D';
type Direction = 'U' | 'R' | 'D' | 'L';

let currentKey: Digit = 5;

let grid: Array<Array<Digit | undefined>> = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

export function partOne(sequences: Array<string>): number {
    currentKey = 5;
    grid = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ];

    return parseInt(runSequences(sequences));
}

export function partTwo(sequences: Array<string>): string {
    currentKey = 5;
    grid = [
        [undefined, undefined, 1, undefined, undefined],
        [undefined, 2, 3, 4, undefined],
        [5, 6, 7, 8, 9],
        [undefined, 'A', 'B', 'C', undefined],
        [undefined, undefined, 'D', undefined, undefined],
    ];

    return runSequences(sequences);
}

function runSequences(sequences: Array<string>) {
    let pin = '';

    for (const sequence of sequences) {
        const movements: Array<Direction> = sequence
            .split('')
            .map((s) => s as Direction);

        for (const movement of movements) {
            currentKey = findNextKey(currentKey, movement);
        }
        pin += currentKey;
    }

    return pin;
}

export function findNextKey(key: Digit, direction: Direction): Digit {
    let y = grid.findIndex((row) => row.includes(key));
    let x = grid[y].findIndex((k) => k === key);

    switch (direction) {
        case 'U':
            y--;
            break;
        case 'D':
            y++;
            break;
        case 'L':
            x--;
            break;
        case 'R':
            x++;
            break;
    }

    // See if grid[y] exists, if so, see if grid[y][x] exists, if so return it
    // otherwise return the current key
    return (grid[y] ? grid[y][x] : undefined) ?? key;
}

function main() {
    const input: string = getFileContent('2016/02/input.txt');
    const sequences: Array<string> = input.split('\n').filter((s) => s !== '');

    const bathroomPin = partOne(sequences);
    const revisedBathroomPin = partTwo(sequences);

    console.log(`The result of part one is: ${bathroomPin}`);
    console.log(`The result of part two is: ${revisedBathroomPin}`);
}

if (process.env.NODE_ENV !== 'test') {
    // Only run the main function when not in testing,
    // to speed up pipelines
    main();
}
