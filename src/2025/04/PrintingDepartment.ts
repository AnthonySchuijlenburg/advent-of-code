import { getFileContent } from '../../helpers/ReadFromFile.ts';

export function partOne(input: string[]): number {
    const grid = input.map((line) => line.split(''));

    let total = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '@' && hasFreePlacesNextToIt(grid, i, j)) {
                total++;
            }
        }
    }

    return total;
}

export function partTwo(input: string[]): number {
    const grid = input.map((line) => line.split(''));

    let total = 0;
    let totalThisLoop = 0;
    do {
        totalThisLoop = 0;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === '@' && hasFreePlacesNextToIt(grid, i, j)) {
                    total++;
                    totalThisLoop++;
                    grid[i][j] = '.';
                }
            }
        }
    } while (totalThisLoop !== 0);

    return total;
}

const modulations: { y: number; x: number }[] = [
    { y: 0, x: -1 }, // left
    { y: 0, x: 1 }, // right
    { y: 1, x: 0 }, // top
    { y: -1, x: 0 }, // bottom
    { y: 1, x: -1 }, // top left
    { y: 1, x: 1 }, // top right
    { y: -1, x: -1 }, // bottom left
    { y: -1, x: 1 }, // bottom right
];

function hasFreePlacesNextToIt(
    grid: string[][],
    y: number,
    x: number,
): boolean {
    let freePlaces = 0;
    for (const modulation of modulations) {
        const targetY = y + modulation.y;
        const targetX = x + modulation.x;
        if (targetY < 0 || targetX < 0) {
            freePlaces++;
            continue;
        }

        if (targetY > grid.length - 1 || targetX > grid[targetY].length - 1) {
            freePlaces++;
            continue;
        }

        if (grid[targetY][targetX] === '.') {
            freePlaces += 1;
        }
    }

    return freePlaces > 4;
}

function main() {
    const input = getFileContent('2025/04/input.txt');

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
