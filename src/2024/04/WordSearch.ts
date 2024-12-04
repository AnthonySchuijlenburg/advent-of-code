import { getFileContent } from '../../helpers/ReadFromFile.ts';

interface LetterMap {
    [key: string]: string;
}

let map: LetterMap;

export function partOne(input: string[]): number {
    map = getWordMap(input);
    let count = 0;

    for (let y = 0; y < input.length; y++) {
        for (let x = 0; x < input[y].length; x++) {
            if (input[y][x] === 'X') {
                count += isXmas(x, y);
            }
        }
    }

    return count;
}

export function partTwo(input: string[]): number {
    map = getWordMap(input);
    let count = 0;

    for (let y = 0; y < input.length; y++) {
        for (let x = 0; x < input[y].length; x++) {
            if (input[y][x] === 'A') {
                if (isXMas(x, y)) {
                    count++;
                }
            }
        }
    }

    return count;
}

function getWordMap(input: string[]): LetterMap {
    const map: LetterMap = {};

    for (let y = 0; y < input.length; y++) {
        for (let x = 0; x < input[y].length; x++) {
            map[`${x}:${y}`] = input[y][x];
        }
    }

    return map;
}

function isXmas(x: number, y: number): number {
    let count = 0;

    const directions = [
        [-1, 0], // left
        [1, 0], // right
        [0, -1], // bottom
        [0, 1], // top
        [-1, 1], // top left
        [1, 1], // top right
        [-1, -1], // bottom left
        [1, -1], // bottom right
    ];

    directions.forEach(([dx, dy]) => {
        if (
            map[`${x + dx}:${y + dy}`] === 'M' &&
            map[`${x + 2 * dx}:${y + 2 * dy}`] === 'A' &&
            map[`${x + 3 * dx}:${y + 3 * dy}`] === 'S'
        ) {
            count++;
        }
    });

    return count;
}

function isXMas(x: number, y: number): boolean {
    return (
        ((map[`${x + 1}:${y + 1}`] === 'M' &&
            map[`${x - 1}:${y - 1}`] === 'S') ||
            (map[`${x + 1}:${y + 1}`] === 'S' &&
                map[`${x - 1}:${y - 1}`] === 'M')) &&
        ((map[`${x - 1}:${y + 1}`] === 'M' &&
            map[`${x + 1}:${y - 1}`] === 'S') ||
            (map[`${x - 1}:${y + 1}`] === 'S' &&
                map[`${x + 1}:${y - 1}`] === 'M'))
    );
}

function main() {
    const input = getFileContent('2024/04/input.txt');

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
