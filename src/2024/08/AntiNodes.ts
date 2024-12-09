import { getFileContent } from '../../helpers/ReadFromFile.ts';

interface NodeMap {
    [key: string]: {
        x: number;
        y: number;
        frequency: string;
        antiNodes: string[];
    };
}

export function partOne(input: string[]): number {
    return calculateTotalAntiNodes(input);
}

export function partTwo(input: string[]): number {
    return calculateTotalAntiNodes(
        input,
        0,
        Math.max(input.length, ...input.map((l) => l.length)),
    );
}

function calculateTotalAntiNodes(
    input: string[],
    start: number = 1,
    positions: number = 2,
) {
    const map = getNodeMap(input);
    const frequencies = new Set(
        Object.values(map)
            .map((entry) => entry.frequency)
            .filter((char) => char !== '.'),
    );

    for (const frequency of frequencies) {
        const freqLocations = Object.values(map).filter(
            (entry) => entry.frequency === frequency,
        );

        for (const a of freqLocations) {
            for (const b of freqLocations) {
                if (a.x === b.x && a.y === b.y) {
                    continue;
                }

                const xAdd = a.x - b.x;
                const yAdd = a.y - b.y;

                for (let i = start; i < positions; i++) {
                    const antiNode = `${a.x + xAdd * i}:${a.y + yAdd * i}`;

                    if (!map[antiNode]) {
                        break;
                    }
                    map[antiNode].antiNodes.push(frequency);
                }
            }
        }
    }

    return Object.values(map).filter((entry) => entry.antiNodes.length > 0)
        .length;
}

function getNodeMap(input: string[]): NodeMap {
    const map: NodeMap = {};
    for (let y = 0; y < input.length; y++) {
        for (let x = 0; x < input[y].length; x++) {
            map[`${x}:${y}`] = {
                x,
                y,
                frequency: input[y][x],
                antiNodes: [],
            };
        }
    }

    return map;
}

function main() {
    const input = getFileContent('2024/08/input.txt');

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
