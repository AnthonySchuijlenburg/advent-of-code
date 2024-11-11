import { getFileContent } from '../../helpers/ReadFromFile.ts';
import * as math from 'mathjs';

interface MapValue {
    left: string;
    right: string;
}

interface Map {
    [key: string]: MapValue;
}

function calculateMoves(input: string): number {
    const { sequence, map } = formatInput(input);

    return doSequenceUntilEnd(sequence, map, 'AAA');
}

function calculateMovesAsGhost(input: string): number {
    const { sequence, map } = formatInput(input);
    const startingLocations = Object.keys(map).filter(
        (key) => key[key.length - 1] === 'A',
    );

    const minSteps: number[] = startingLocations.map((location) => {
        return doSequenceUntilEnd(sequence, map, location);
    });

    // @ts-expect-error ts doesn't accept that spread on a number array will actually give numbers
    return math.lcm(...minSteps);
}

function formatInput(input: string): { sequence: string; map: Map } {
    let splitInput = input.split('\n\n');
    const sequence: string = splitInput[0];
    splitInput = splitInput[1].split('\n').filter((line) => line !== '');

    const map: Map = {};

    splitInput.forEach((line) => {
        const splitLine = line.split(' = ');

        const leftRight = splitLine[1]
            .replace('(', '')
            .replace(')', '')
            .split(', ');

        map[splitLine[0]] = { left: leftRight[0], right: leftRight[1] };
    });

    return { sequence, map };
}

function doSequenceUntilEnd(
    sequence: string,
    map: Map,
    startLocation: string,
): number {
    let counter = 0;
    let currentLocation = startLocation;

    while (currentLocation[currentLocation.length - 1] !== 'Z') {
        const currentLocationObject: MapValue = map[currentLocation];
        const currentInstruction = sequence[counter % sequence.length];

        if (currentInstruction === 'L') {
            currentLocation = currentLocationObject.left;
        } else {
            currentLocation = currentLocationObject.right;
        }

        counter++;
    }

    return counter;
}

export function partOne(input: string): number {
    return calculateMoves(input);
}

export function partTwo(input: string): number {
    return calculateMovesAsGhost(input);
}

function main() {
    const input = getFileContent('2023/08/input.txt');

    const partOneResult = partOne(input);
    const partTwoResult = partTwo(input);

    console.log(`The result of part one is: ${partOneResult}`);
    console.log(`The result of part two is: ${partTwoResult}`);
}

if (process.env.NODE_ENV !== 'test') {
    // Only run the main function when not in testing,
    // to speed up pipelines
    main();
}
