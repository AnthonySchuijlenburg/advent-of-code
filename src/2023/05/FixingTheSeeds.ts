import { getFileContent } from '../../helpers/ReadFromFile.ts';

interface Map {
    destinationRangeTarget: number;
    sourceRangeTarget: number;
    rangeLength: number;
}

let seeds: number[] = [];
let mapArray: Map[][] = [];

function calculateFirstPossibleSeedLocationForSeedsWithMap(
    input: string,
): number {
    const splitInput = input.split('\n\n');

    seeds = splitInput[0]
        .replace('seeds: ', '')
        .split(' ')
        .map((seed) => parseInt(seed));
    setMapArray(splitInput);

    return calculateFirstPossibleSeedLocationForSeeds(splitInput, seeds);
}

function calculateFirstPossibleSeedLocationForSeedRangesWithMap(
    input: string,
): number {
    const splitInput = input.split('\n\n');

    const seedRanges: number[] = splitInput[0]
        .replace('seeds: ', '')
        .split(' ')
        .map((seed) => parseInt(seed));
    setMapArray(splitInput);

    let lowestPossibleSeedLocation = -1;

    for (let i = 0; i < seedRanges.length; i += 2) {
        const seedRangeStart = seedRanges[i];

        for (
            let j = seedRangeStart;
            j < seedRangeStart + seedRanges[i + 1];
            j++
        ) {
            const actualSeedLocation = getActualSeedLocation(j);

            if (lowestPossibleSeedLocation === -1) {
                lowestPossibleSeedLocation = actualSeedLocation;
                continue;
            }

            if (actualSeedLocation < lowestPossibleSeedLocation) {
                lowestPossibleSeedLocation = actualSeedLocation;
            }
        }
    }

    return lowestPossibleSeedLocation;
}

function setMapArray(splitInput: string[]): void {
    const seedToSoilMap: Map[] = makeMapArray(splitInput[1]);
    const soilToFertilizerMap: Map[] = makeMapArray(splitInput[2]);
    const fertilizerToWaterMap: Map[] = makeMapArray(splitInput[3]);
    const waterToLightMap: Map[] = makeMapArray(splitInput[4]);
    const lightToTemperatureMap: Map[] = makeMapArray(splitInput[5]);
    const temperatureToHumidityMap: Map[] = makeMapArray(splitInput[6]);
    const humidityToLocationMap: Map[] = makeMapArray(splitInput[7]);

    mapArray = [
        seedToSoilMap,
        soilToFertilizerMap,
        fertilizerToWaterMap,
        waterToLightMap,
        lightToTemperatureMap,
        temperatureToHumidityMap,
        humidityToLocationMap,
    ];
}

function calculateFirstPossibleSeedLocationForSeeds(
    splitInput: string[],
    seeds: number[],
): number {
    const actualSeedLocations: number[] = seeds.map((seed: number): number => {
        return getActualSeedLocation(seed);
    });

    return Math.min(...actualSeedLocations);
}

function makeMapArray(input: string): Map[] {
    const mapArray: Map[] = [];

    const splitInput = input.split('\n');
    splitInput.shift();

    for (const string of splitInput) {
        if (string === '') {
            continue;
        }

        const splitString = string.split(' ');

        mapArray.push({
            destinationRangeTarget: parseInt(splitString[0]),
            sourceRangeTarget: parseInt(splitString[1]),
            rangeLength: parseInt(splitString[2]),
        });
    }

    return mapArray;
}

function isInRange(value: number, start: number, range: number): boolean {
    return value >= start && value < start + range;
}

function getActualSeedLocation(seed: number): number {
    let seedLocation: number = seed;

    for (const map of mapArray) {
        seedLocation = getNextLocationForSeedAccordingToMap(seedLocation, map);
    }

    return seedLocation;
}

function getNextLocationForSeedAccordingToMap(
    seed: number,
    maps: Map[],
): number {
    for (const map of maps) {
        if (isInRange(seed, map.sourceRangeTarget, map.rangeLength)) {
            return seed - map.sourceRangeTarget + map.destinationRangeTarget;
        }
    }

    return seed;
}

export function partOne(input: string): number {
    return calculateFirstPossibleSeedLocationForSeedsWithMap(input);
}

export function partTwo(input: string): number {
    return calculateFirstPossibleSeedLocationForSeedRangesWithMap(input);
}

function main() {
    const input = getFileContent('2023/05/input.txt');

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
