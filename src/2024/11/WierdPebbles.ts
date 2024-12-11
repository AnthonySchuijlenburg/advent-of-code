import { getFileContent } from '../../helpers/ReadFromFile.ts';

interface StoneMap {
    [key: number]: number;
}

export function partOne(input: string): number {
    const rounds = 25;
    return getStonesAfterRounds(input, rounds);
}

export function partTwo(input: string): number {
    return getStonesAfterRounds(input, 75);
}

export function getStonesAfterRounds(input: string, rounds: number): number {
    let map: StoneMap = {};
    input
        .split(' ')
        .map((s) => Number(s))
        .forEach((stone) => {
            map[stone] = (map[stone] ?? 0) + 1;
        });

    for (let i = 0; i < rounds; i++) {
        const newMap: StoneMap = {};

        if (map[0]) {
            newMap[1] = map[0];
        }

        const evenLength = Object.keys(map).filter(
            (s) => s !== '0' && s.length % 2 === 0,
        );

        for (const string of evenLength) {
            const [l, r] = [
                Number(string.substring(0, string.length / 2)),
                Number(string.substring(string.length / 2)),
            ];

            newMap[l] = (newMap[l] ?? 0) + map[Number(string)];
            newMap[r] = (newMap[r] ?? 0) + map[Number(string)];
        }

        const noOtherRules = Object.keys(map)
            .filter((s) => s !== '0' && s.length % 2 !== 0)
            .map((s) => Number(s));

        for (const stone of noOtherRules) {
            newMap[Number(stone) * 2024] =
                (newMap[Number(stone) * 2024] ?? 0) + map[Number(stone)];
        }

        map = newMap;
    }
    return Object.values(map).reduce((acc, curr) => acc + curr, 0);
}

function main() {
    const input = getFileContent('2024/11/input.txt');

    const partOneResult = partOne(input.split('\n').filter((s) => !!s)[0]);
    const partTwoResult = partTwo(input.split('\n').filter((s) => !!s)[0]);

    console.log(`The result of part one is: ${partOneResult}`);
    console.log(`The result of part two is: ${partTwoResult}`);
}

if (process.env.NODE_ENV !== 'test') {
    // Only run the main function when not in testing,
    // to speed up pipelines
    main();
}
