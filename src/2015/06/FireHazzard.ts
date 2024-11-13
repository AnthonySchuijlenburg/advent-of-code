import { getFileContent } from '../../helpers/ReadFromFile.ts';

interface Grid {
    [key: string]: number;
}

interface Range {
    x: number;
    y: number;
}

type callback = (
    grid: Grid,
    from: Range,
    to: Range,
    brightness?: boolean,
) => Grid;

export function partOne(input: string[], gridSize: number = 1000): number {
    let grid: Grid = makeGrid(gridSize, gridSize);
    grid = doGridTransformations(input, grid);

    return Object.values(grid).filter((l) => l === 1).length;
}

export function partTwo(input: string[], gridSize: number = 1000): number {
    let grid: Grid = makeGrid(gridSize, gridSize);
    grid = doGridTransformations(input, grid, true);

    return Object.values(grid).reduce((acc, curr) => acc + curr, 0);
}

function makeGrid(x: number, y: number): Grid {
    const grid: Grid = {};

    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            grid[`${i}:${j}`] = 0;
        }
    }
    return grid;
}

function doGridTransformations(
    input: string[],
    grid: Grid,
    birghtness: boolean = false,
): Grid {
    for (let instruction of input) {
        let callback: callback;
        if (instruction.startsWith('turn on')) {
            instruction = instruction.replace('turn on ', '');
            callback = turnOn;
        } else if (instruction.startsWith('turn off')) {
            instruction = instruction.replace('turn off ', '');
            callback = turnOff;
        } else {
            instruction = instruction.replace('toggle ', '');
            callback = toggle;
        }

        const i = instruction.replace(' through ', ',').split(',').map(Number);
        grid = callback(
            grid,
            { x: i[0], y: i[1] },
            { x: i[2], y: i[3] },
            birghtness,
        );
    }

    return grid;
}

function turnOn(
    grid: Grid,
    from: Range,
    to: Range,
    brightness: boolean = false,
): Grid {
    for (let i = from.x; i < to.x + 1; i++) {
        for (let j = from.y; j < to.y + 1; j++) {
            grid[`${i}:${j}`] = brightness ? grid[`${i}:${j}`] + 1 : 1;
        }
    }

    return grid;
}

function turnOff(
    grid: Grid,
    from: Range,
    to: Range,
    brightness: boolean = false,
): Grid {
    for (let i = from.x; i < to.x + 1; i++) {
        for (let j = from.y; j < to.y + 1; j++) {
            grid[`${i}:${j}`] = Math.max(
                0,
                brightness ? grid[`${i}:${j}`] - 1 : 0,
            );
        }
    }

    return grid;
}

function toggle(
    grid: Grid,
    from: Range,
    to: Range,
    brightness: boolean = false,
): Grid {
    for (let i = from.x; i < to.x + 1; i++) {
        for (let j = from.y; j < to.y + 1; j++) {
            grid[`${i}:${j}`] = brightness
                ? grid[`${i}:${j}`] + 2
                : grid[`${i}:${j}`] === 0
                  ? 1
                  : 0;
        }
    }

    return grid;
}

function main() {
    const input: string = getFileContent('2015/06/input.txt');

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
