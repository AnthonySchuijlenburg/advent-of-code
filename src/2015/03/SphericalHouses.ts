import { getFileContent } from '../../helpers/ReadFromFile.ts';

interface Locations {
    [key: string]: number;
}

export function partOne(directions: string): number {
    const splitDirections = directions.split('').filter((s) => !!s);

    let santa = { x: 0, y: 0 };

    const locations: Locations = {
        '0:0': 1,
    };

    for (const direction of splitDirections) {
        santa = doMove(santa.x, santa.y, direction);
        const key = getLocationKey(santa.x, santa.y);

        if (!locations[key]) {
            locations[key] = 1;
            continue;
        }

        locations[key] += 1;
    }

    return Object.values(locations).length;
}

export function partTwo(directions: string): number {
    const splitDirections = directions.split('').filter((s) => !!s);

    let santa = { x: 0, y: 0 };
    let robo = { x: 0, y: 0 };

    let santaTurn = true;

    const locations: Locations = {
        '0:0': 1,
    };

    for (const direction of splitDirections) {
        let key: string;

        if (santaTurn) {
            santa = doMove(santa.x, santa.y, direction);
            santaTurn = false;
            key = getLocationKey(santa.x, santa.y);
        } else {
            robo = doMove(robo.x, robo.y, direction);
            santaTurn = true;
            key = getLocationKey(robo.x, robo.y);
        }

        if (!locations[key]) {
            locations[key] = 1;
            continue;
        }

        locations[key] += 1;
    }

    return Object.values(locations).length;
}

function doMove(
    x: number,
    y: number,
    direction: string,
): { x: number; y: number } {
    if (direction === '>') {
        x++;
    } else if (direction === '<') {
        x--;
    } else if (direction === '^') {
        y++;
    } else if (direction === 'v') {
        y--;
    }

    return { x, y };
}

function getLocationKey(x: number, y: number) {
    return `${x}:${y}`;
}

function main() {
    const input: string = getFileContent('2015/03/input.txt');

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
