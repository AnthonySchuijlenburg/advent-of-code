import { getFileContent } from '../../helpers/ReadFromFile.ts';

interface Race {
    time: number;
    distance: number;
}

function formatInputForMultipleRaces(input: string): Race[] {
    const splitInput = input
        .split('\n')
        .map((line) => line.split(/\s+/))
        .filter((line) => line.length > 1);

    const races: Race[] = [];

    for (let i = 1; i < splitInput[0].length; i++) {
        races.push({
            time: parseInt(splitInput[0][i]),
            distance: parseInt(splitInput[1][i]),
        });
    }

    return races;
}

function formatInputForOneRace(input: string): Race[] {
    const splitInput = input
        .split('\n')
        .map((line) => line.split(/\s+/))
        .filter((line) => line.length > 1);

    const races: Race[] = [];

    for (let i = 1; i < splitInput[0].length; i++) {
        if (races.length === 0) {
            races.push({
                time: parseInt(splitInput[0][i]),
                distance: parseInt(splitInput[1][i]),
            });

            continue;
        }

        races[0] = {
            time: parseInt(races[0].time + splitInput[0][i]),
            distance: parseInt(races[0].distance + splitInput[1][i]),
        };
    }

    return races;
}
function calculatePossibilitiesForARecord(race: Race): number {
    const a: number = -1;
    const b: number = race.time;
    const c: number = -race.distance;

    const delta: number = b * b - 4 * a * c;
    const x1: number = (-b + Math.sqrt(delta)) / (2 * a);
    const x2: number = (-b - Math.sqrt(delta)) / (2 * a);

    const firstRecord: number = x1 % 1 === 0 ? x1 + 1 : Math.ceil(x1);
    const lastRecord: number = x2 % 1 === 0 ? x2 - 1 : Math.floor(x2);

    return lastRecord - firstRecord + 1;
}

function getTotalPossibilitiesOfRecords(races: Race[]): number {
    let possibilities = 1;

    for (const race of races) {
        possibilities *= calculatePossibilitiesForARecord(race);
    }

    return possibilities;
}

export function partOne(input: string): number {
    return getTotalPossibilitiesOfRecords(formatInputForMultipleRaces(input));
}

export function partTwo(input: string): number {
    return getTotalPossibilitiesOfRecords(formatInputForOneRace(input));
}

function main() {
    const input = getFileContent('2023/06/input.txt');

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
