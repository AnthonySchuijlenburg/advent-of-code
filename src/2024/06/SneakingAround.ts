import { getFileContent } from '../../helpers/ReadFromFile.ts';

interface LocationMap {
    [key: string]: {
        x: number;
        y: number;
        symbol: string;
        visited: boolean;
        inHeading?: 'N' | 'S' | 'E' | 'W';
    };
}

const directions = {
    N: {
        x: 0,
        y: -1,
    },
    S: {
        x: 0,
        y: 1,
    },
    E: {
        x: 1,
        y: 0,
    },
    W: {
        x: -1,
        y: 0,
    },
};

export function partOne(input: string[]): number {
    const map: LocationMap = doInitialRound(input);
    return Object.values(map).filter((loc) => loc.visited).length;
}

export function partTwo(input: string[]): number {
    const map: LocationMap = doInitialRound(input);
    return Object.values(map).filter(
        (loc) =>
            loc.visited &&
            loc.symbol !== '^' &&
            findLoop(input, { x: loc.x, y: loc.y }),
    ).length;
}

function getLocationMap(input: string[]): LocationMap {
    const map: LocationMap = {};

    for (let y = 0; y < input.length; y++) {
        for (let x = 0; x < input[y].length; x++) {
            map[`${x}:${y}`] = {
                x,
                y,
                symbol: input[y][x],
                visited: input[y][x] === '^',
            };
        }
    }

    return map;
}

function doInitialRound(input: string[]): LocationMap {
    const map = getLocationMap(input);
    const startingPosition = Object.values(map).filter(
        (loc) => loc.symbol === '^',
    );
    let [x, y] = [startingPosition[0].x, startingPosition[0].y];
    let heading: 'N' | 'S' | 'E' | 'W' = 'N';
    const headings: Array<'N' | 'E' | 'S' | 'W'> = ['N', 'E', 'S', 'W'];

    for (let i = 0; i < 100000; i++) {
        const nextLoc: string = `${x + directions[heading].x}:${y + directions[heading].y}`;
        if (!map[nextLoc]) {
            break;
        }

        if (map[nextLoc].symbol !== '#') {
            [x, y] = [x + directions[heading].x, y + directions[heading].y];
            map[nextLoc].visited = true;
            continue;
        }

        heading =
            headings[
                (headings.findIndex((h) => h === heading) + 1) % headings.length
            ];
    }

    return map;
}

function findLoop(
    input: string[],
    obstacleLocation: { x: number; y: number },
): boolean {
    const map = getLocationMap(input);
    map[`${obstacleLocation.x}:${obstacleLocation.y}`].symbol = '#';

    const startingPosition = Object.values(map).filter(
        (loc) => loc.symbol === '^',
    );
    let [x, y] = [startingPosition[0].x, startingPosition[0].y];
    let heading: 'N' | 'S' | 'E' | 'W' = 'N';
    const headings: Array<'N' | 'E' | 'S' | 'W'> = ['N', 'E', 'S', 'W'];
    for (let i = 0; i < 100000; i++) {
        const nextLoc: string = `${x + directions[heading].x}:${y + directions[heading].y}`;
        if (!map[nextLoc]) {
            break;
        }

        if (map[nextLoc].symbol !== '#') {
            [x, y] = [x + directions[heading].x, y + directions[heading].y];

            if (map[nextLoc].visited && map[nextLoc].inHeading === heading) {
                return true;
            }

            map[nextLoc].visited = true;
            map[nextLoc].inHeading = heading;
            continue;
        }

        heading =
            headings[
                (headings.findIndex((h) => h === heading) + 1) % headings.length
            ];
    }

    return false;
}

function main() {
    const input = getFileContent('2024/06/input.txt');

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
