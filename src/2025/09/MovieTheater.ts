import { getFileContent } from '../../helpers/ReadFromFile.ts';

interface Tile {
    x: number;
    y: number;
}

interface Area {
    tileA: Tile;
    tileB: Tile;
    area: number;
}

export function partOne(input: string[]): number {
    const formattedTiles = input.map((line) => line.split(',').map(Number));
    let maxSize = 0;

    for (let i = 0; i < formattedTiles.length; i++) {
        for (let j = 0; j < formattedTiles.length; j++) {
            const tileA = formattedTiles[i];
            const tileB = formattedTiles[j];
            const area =
                (Math.abs(tileA[0] - tileB[0]) + 1) *
                (Math.abs(tileA[1] - tileB[1]) + 1);

            if (area > maxSize) {
                maxSize = area;
            }
        }
    }

    return maxSize;
}

export function partTwo(input: string[]): number {
    const grid = makeGrid(input);
    const formattedTiles = input.map((line) => line.split(',').map(Number));
    let areas: Area[] = [];

    for (let i = 0; i < formattedTiles.length; i++) {
        for (let j = 0; j < formattedTiles.length; j++) {
            const tileA: Tile = {
                x: formattedTiles[i][0],
                y: formattedTiles[i][1],
            };
            const tileB: Tile = {
                x: formattedTiles[j][0],
                y: formattedTiles[j][1],
            };
            const area =
                (Math.abs(tileA.x - tileB.x) + 1) *
                (Math.abs(tileA.y - tileB.y) + 1);

            areas.push({
                tileA,
                tileB,
                area,
            });
        }
    }
    areas = areas.sort((a, b) => b.area - a.area);
    for (const area of areas) {
        const tileA = area.tileA;
        const tileB = area.tileB;

        let valid = true;
        for (
            let y = Math.min(tileA.y, tileB.y);
            y < Math.max(tileA.y, tileB.y);
            y++
        ) {
            for (
                let x = Math.min(tileA.x, tileB.x);
                x < Math.max(tileA.x, tileB.x);
                x++
            ) {
                if (grid[y][x] !== '#') {
                    valid = false;
                    break;
                }
            }

            if (!valid) break;
        }
        if (!valid) {
            continue;
        }

        return area.area;
    }

    return -1;
}

function makeGrid(input: string[]): string[] {
    let max = 0;
    const tiles: Tile[] = input.map((tile) => {
        const split = tile.split(',').map(Number);
        max = Math.max(max, ...split);

        return {
            x: split[0],
            y: split[1],
        };
    });
    const grid: string[] = [];
    for (let i = 0; i < max; i++) {
        grid.push('.'.repeat(max + 3)); // some extra padding
    }

    for (let i = 0; i < tiles.length; i++) {
        const curr: Tile = tiles[i];
        const next: Tile = i + 1 === tiles.length ? tiles[0] : tiles[i + 1];

        // horizontal match
        if (curr.y === next.y) {
            const line = grid[curr.y];
            const min = Math.min(curr.x, next.x);
            const max = Math.max(curr.x, next.x);

            grid[curr.y] =
                line.substring(0, min) +
                '#'.repeat(max - min + 1) +
                line.substring(max + 1);
            continue;
        }

        const min = Math.min(curr.y, next.y);
        const max = Math.max(curr.y, next.y);
        for (let y = min; y < max; y++) {
            const line = grid[y];
            grid[y] =
                line.substring(0, curr.x) + '#' + line.substring(curr.x + 1);
        }
    }

    for (let i = 0; i < grid.length; i++) {
        let line = grid[i];
        const matches = grid[i].matchAll(/#\.+?#/g);
        for (const match of matches) {
            line =
                line.substring(0, match.index) +
                '#'.repeat(match[0].length) +
                line.substring(match.index + match[0].length);
        }

        grid[i] = line;
    }

    return grid;
}

function main() {
    const input = getFileContent('2025/09/input.txt');

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
