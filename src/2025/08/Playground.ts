import { getFileContent } from '../../helpers/ReadFromFile.ts';

interface JunctionBox {
    x: number;
    y: number;
    z: number;
}

interface DistanceMap {
    [key: string]: number;
}

export function partOne(input: string[], rounds: number): number {
    const map = mapDistances(input);
    let clusters: string[][] = input.map((cluster) => [cluster]);

    for (let i = 0; i < rounds; i++) {
        const nextMatch = map[i][0];

        const [a, b] = nextMatch.split(':');
        const aCluster = clusters.find((cluster) => cluster.includes(a));
        const bCluster = clusters.find((cluster) => cluster.includes(b));

        if (!aCluster || !bCluster) throw new Error('Should not happen');
        if (aCluster === bCluster) {
            continue;
        }

        aCluster.push(...bCluster);
        clusters = clusters.filter((n) => n !== bCluster);
    }

    return clusters
        .sort((a, b) => b.length - a.length)
        .slice(0, 3)
        .reduce((acc, curr) => acc * curr.length, 1);
}

export function partTwo(input: string[]): number {
    const map = mapDistances(input);
    let clusters: string[][] = input.map((cluster) => [cluster]);

    let lastA: string = '0,0,0';
    let lastB: string = '0,0,0';
    let index: number = 0;
    while (clusters.length > 1) {
        const nextMatch = map[index++][0];

        const [a, b] = nextMatch.split(':');
        lastA = a;
        lastB = b;

        const aCluster = clusters.find((cluster) => cluster.includes(a));
        const bCluster = clusters.find((cluster) => cluster.includes(b));

        if (!aCluster || !bCluster) throw new Error('Should not happen');
        if (aCluster === bCluster) {
            continue;
        }

        aCluster.push(...bCluster);
        clusters = clusters.filter((n) => n !== bCluster);
    }

    return makeJunctionBox(lastA).x * makeJunctionBox(lastB).x;
}

function mapDistances(boxes: string[]) {
    const map: DistanceMap = {};

    for (let i = 0; i < boxes.length; i++) {
        for (let j = 0; j < boxes.length; j++) {
            const a = boxes[i];
            const b = boxes[j];

            // check if reverse exists
            if (map[`${b}:${a}`] || i === j) {
                continue;
            }

            map[`${a}:${b}`] = calculateDistance(
                makeJunctionBox(a),
                makeJunctionBox(b),
            );
        }
    }

    return Object.entries(map).sort((a, b) => a[1] - b[1]);
}

function makeJunctionBox(box: string): JunctionBox {
    const splitLine = box.split(',');
    return {
        x: Number(splitLine[0]),
        y: Number(splitLine[1]),
        z: Number(splitLine[2]),
    };
}

function calculateDistance(a: JunctionBox, b: JunctionBox): number {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    const dz = a.z - b.z;
    return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2) + Math.pow(dz, 2));
}

function main() {
    const input = getFileContent('2025/08/input.txt');

    const partOneResult = partOne(
        input.split('\n').filter((s) => !!s),
        1000,
    );
    const partTwoResult = partTwo(input.split('\n').filter((s) => !!s));

    console.log(`The result of part one is: ${partOneResult}`);
    console.log(`The result of part two is: ${partTwoResult}`);
}

if (process.env.NODE_ENV !== 'test') {
    // Only run the main function when not in testing,
    // to speed up pipelines
    main();
}
