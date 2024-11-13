import { getFileContent } from '../../helpers/ReadFromFile.ts';

interface Cities {
    [key: string]: {
        cities: {
            [key: string]: number;
        };
    };
}

export function partOne(input: string[]): number {
    return calculateRoute(input, Math.min);
}

export function partTwo(input: string[]): number {
    return calculateRoute(input, Math.max);
}

function calculateRoute(
    distances: string[],
    callback: typeof Math.max | typeof Math.min,
): number {
    const citiesMap = getCitiesMap(distances);
    const possibleRoutes = getPermutations(Object.keys(citiesMap));
    let shortestRoute;
    for (const possibleRoute of possibleRoutes) {
        let routeLength = 0;

        for (let i = 0; i < possibleRoute.length - 1; i++) {
            routeLength +=
                citiesMap[possibleRoute[i]].cities[possibleRoute[i + 1]];
        }

        shortestRoute = shortestRoute
            ? callback(shortestRoute, routeLength)
            : routeLength;
    }

    return shortestRoute ?? 0;
}

function getCitiesMap(distances: string[]): Cities {
    const cities: Cities = {};

    for (const string of distances) {
        const distances: string[] = string
            .replace(' to ', ' ')
            .replace(' = ', ' ')
            .split(' ');
        const distance = Number(distances[2]);

        if (!cities[distances[0]]) {
            cities[distances[0]] = { cities: {} };
        }

        if (!cities[distances[1]]) {
            cities[distances[1]] = { cities: {} };
        }

        cities[distances[0]].cities[distances[1]] = distance;
        cities[distances[1]].cities[distances[0]] = distance;
    }

    return cities;
}

function getPermutations(array: string[]): string[][] {
    if (array.length === 0) {
        return [[]];
    }
    const result: string[][] = [];

    array.forEach((element, index) => {
        const rest = [...array.slice(0, index), ...array.slice(index + 1)];
        const permutationsOfRest = getPermutations(rest);
        permutationsOfRest.forEach((permutation) => {
            result.push([element, ...permutation]);
        });
    });

    return result;
}

function main() {
    const input: string = getFileContent('2015/09/input.txt');

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
