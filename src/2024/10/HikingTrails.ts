import { getFileContent } from '../../helpers/ReadFromFile.ts';

interface Position {
    x: number;
    y: number;
    value: number;
}

interface HeightMap {
    [key: string]: Position;
}

const translations = [
    { x: -1, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: -1 },
    { x: 0, y: 1 },
];

export function partOne(input: string[]): number {
    const map = getHeightMap(input);
    const trailStarts = Object.values(map)
        .filter((pos) => pos.value === 0)
        .map((pos) => getTrailScore(map, pos));

    return trailStarts.reduce((acc, curr) => acc + curr, 0);
}

export function partTwo(input: string[]): number {
    const map = getHeightMap(input);
    const trailStarts = Object.values(map)
        .filter((pos) => pos.value === 0)
        .map((pos) => getTrailScore(map, pos, false));

    return trailStarts.reduce((acc, curr) => acc + curr, 0);
}

function getTrailScore(
    map: HeightMap,
    startingPos: Position,
    unique: boolean = true,
): number {
    const finalPositions = getNextPositions(map, startingPos).filter(
        (pos) => pos.value === 9,
    );

    return unique ? new Set(finalPositions).size : finalPositions.length;
}

function getNextPositions(map: HeightMap, startingPos: Position) {
    const nextPositions: Position[] = [];
    for (const translation of translations) {
        const nextPos = `${startingPos.x + translation.x}:${startingPos.y + translation.y}`;
        if (map[nextPos] && map[nextPos].value === startingPos.value + 1) {
            nextPositions.push(
                map[nextPos],
                ...getNextPositions(map, map[nextPos]),
            );
        }
    }

    return nextPositions;
}

function getHeightMap(input: string[]): HeightMap {
    const map: HeightMap = {};

    for (let y = 0; y < input.length; y++) {
        for (let x = 0; x < input[y].length; x++) {
            map[`${x}:${y}`] = { x, y, value: Number(input[y][x]) };
        }
    }

    return map;
}

function main() {
    const input = getFileContent('2024/10/input.txt');

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
