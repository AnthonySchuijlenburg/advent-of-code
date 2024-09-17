import { getFileContent } from '../../helpers/ReadFromFile.ts';

type Grid = Array<Array<boolean>>;

export function partOne(lines: Array<string>): number {
    const grid = doMoves(lines);

    return countGrid(grid);
}

export function partTwo(lines: Array<string>) {
    const grid = doMoves(lines);
    grid.forEach((row) =>
        console.log(row.map((b) => (b ? '#' : '.')).join('')),
    );
}

function doMoves(lines: Array<string>): Grid {
    let grid: Grid = getEmptyGrid(50, 6);

    for (const line of lines) {
        if (line.startsWith('rect')) {
            const splitLine = line
                .replace(/rect /g, '')
                .split(/x/g)
                .map((s) => parseInt(s));
            grid = rect(grid, splitLine[0], splitLine[1]);
            continue;
        }

        if (line.startsWith('rotate row')) {
            const splitLine = line
                .replace(/rotate row y=/g, '')
                .split(/ by /g)
                .map((s) => parseInt(s));
            grid = rotateRow(grid, splitLine[0], splitLine[1]);
            continue;
        }

        if (line.startsWith('rotate column')) {
            const splitLine = line
                .replace(/rotate column x=/g, '')
                .split(/ by /g)
                .map((s) => parseInt(s));
            grid = rotateColumn(grid, splitLine[0], splitLine[1]);
            continue;
        }

        throw new Error(`Invalid line: ${line}`);
    }

    return grid;
}

function countGrid(grid: Grid): number {
    return grid.flat().filter((b) => b).length;
}

function getEmptyGrid(width: number, height: number): Grid {
    return Array.from({ length: height }, () =>
        Array.from({ length: width }, () => false),
    );
}

export function rect(grid: Grid, width: number, height: number): Grid {
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            grid[i][j] = true;
        }
    }

    return grid;
}

export function rotateRow(grid: Grid, y: number, by: number) {
    by = by % grid[y].length;
    const subGrid = grid[y].splice(grid[y].length - by);
    grid[y].unshift(...subGrid);
    return grid;
}

export function rotateColumn(grid: Grid, x: number, by: number) {
    by = by % grid.length;

    const column = grid.map((row) => row[x]).flat();
    const subGrid = column.splice(column.length - by);
    column.unshift(...subGrid);

    for (let i = 0; i < column.length; i++) {
        grid[i][x] = column[i];
    }

    return grid;
}

function main() {
    const input: Array<string> = getFileContent('2016/08/input.txt')
        .trim()
        .split('\n')
        .filter((s) => !!s);

    const litPixels = partOne(input);
    console.log(`The result of part one is: ${litPixels}`);

    partTwo(input);
}

if (process.env.NODE_ENV !== 'test') {
    // Only run the main function when not in testing,
    // to speed up pipelines
    main();
}
