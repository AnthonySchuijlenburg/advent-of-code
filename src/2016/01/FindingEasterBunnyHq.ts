import { getFileContent } from '../../helpers/ReadFromFile.ts';

interface Position {
    x: number;
    y: number;
    heading: 'N' | 'E' | 'S' | 'W';
}

const position: Position = { x: 0, y: 0, heading: 'N' };
const locations: Array<string> = [];

export function partOne(directions: string[]): number {
    // Reset starting position
    [position.x, position.y, position.heading] = [0, 0, 'N'];
    locations.length = 0;

    for (const direction of directions) {
        travelToNextLocation(direction);
    }

    return Math.abs(position.x) + Math.abs(position.y);
}

export function partTwo(directions: string[]) {
    // Reset starting position
    [position.x, position.y, position.heading] = [0, 0, 'N'];
    locations.length = 0;

    locations.push(`0:0`);

    for (const direction of directions) {
        const endPosition = travelToNextLocation(direction, true);
        if (endPosition) {
            break;
        }
    }

    return Math.abs(position.x) + Math.abs(position.y);
}

function travelToNextLocation(
    direction: string,
    returnOnSecondVisit: boolean = false,
): void | Position {
    position.heading = getNextHeading(position.heading, direction[0] === 'R');

    const steps = parseInt(direction.substring(1));

    switch (position.heading) {
        case 'N':
            for (let i = 0; i < steps; i++) {
                position.y++;

                if (
                    returnOnSecondVisit &&
                    locations.includes(`${position.x}:${position.y}`)
                ) {
                    return position;
                }
                locations.push(`${position.x}:${position.y}`);
            }
            break;
        case 'E':
            for (let i = 0; i < steps; i++) {
                position.x++;

                if (
                    returnOnSecondVisit &&
                    locations.includes(`${position.x}:${position.y}`)
                ) {
                    return position;
                }
                locations.push(`${position.x}:${position.y}`);
            }
            break;
        case 'S':
            for (let i = 0; i < steps; i++) {
                position.y--;

                if (
                    returnOnSecondVisit &&
                    locations.includes(`${position.x}:${position.y}`)
                ) {
                    return position;
                }
                locations.push(`${position.x}:${position.y}`);
            }
            break;
        case 'W':
            for (let i = 0; i < steps; i++) {
                position.x--;

                if (
                    returnOnSecondVisit &&
                    locations.includes(`${position.x}:${position.y}`)
                ) {
                    return position;
                }
                locations.push(`${position.x}:${position.y}`);
            }
            break;
    }
}

export function getNextHeading(
    currentHeading: 'N' | 'E' | 'S' | 'W',
    rightTurn: boolean,
): 'N' | 'E' | 'S' | 'W' {
    const headings: Array<'N' | 'E' | 'S' | 'W'> = ['N', 'E', 'S', 'W'];
    const currentHeadingPosition = headings.findIndex(
        (el) => el === currentHeading,
    );

    let nextPosition = rightTurn
        ? currentHeadingPosition + 1
        : currentHeadingPosition - 1;

    if (nextPosition < 0) {
        nextPosition += headings.length;
    }
    if (nextPosition >= headings.length) {
        nextPosition -= headings.length;
    }

    return headings[nextPosition];
}

function main() {
    const input: string = getFileContent('2016/01/input.txt');

    const distancePartOne = partOne(input.split(', ').filter((s) => s !== ''));
    const distancePartTwo = partTwo(input.split(', ').filter((s) => s !== ''));

    console.log(`The result of part one is: ${distancePartOne}`);
    console.log(`The result of part two is: ${distancePartTwo}`);
}

main();
