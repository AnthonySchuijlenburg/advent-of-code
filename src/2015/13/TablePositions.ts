import { getFileContent } from '../../helpers/ReadFromFile.ts';
import { getPermutations } from '../../helpers/ArrayPermutations.js';

interface Happiness {
    [key: string]: number;
}

interface Table {
    [key: string]: {
        happiness: Happiness;
    };
}

export function partOne(input: string[]): number {
    const table: Table = getTable(input);
    return findMaximumHappiness(table);
}

export function partTwo(input: string[]): number {
    const table: Table = getTable(input);
    const happiness: Happiness = {};
    for (const person of Object.keys(table)) {
        happiness[person] = 0;
        table[person].happiness['me'] = 0;
    }
    table['me'] = { happiness };

    return findMaximumHappiness(table);
}

function getTable(input: string[]): Table {
    const table: Table = {};

    for (const line of input) {
        const split = line
            .replace(' would ', ' ')
            .replace(' happiness units by sitting next to ', ' ')
            .replace('.', '')
            .split(' ');

        if (!table[split[0]]) {
            table[split[0]] = {
                happiness: {},
            };
        }
        table[split[0]].happiness[split[3]] =
            Number(split[2]) * (split[1] === 'gain' ? 1 : -1);
    }
    return table;
}

function findMaximumHappiness(table: Table): number {
    const permutations = getPermutations(Object.keys(table));
    let highestHappiness = 0;

    for (const p of permutations) {
        const lines: number[] = [];

        for (let i = 0; i < p.length; i++) {
            const nextIndex = (i + 1) % p.length;
            lines.push(table[p[i]].happiness[p[nextIndex]]);
            lines.push(table[p[nextIndex]].happiness[p[i]]);
        }

        highestHappiness = Math.max(
            highestHappiness,
            lines.reduce((acc, curr) => acc + curr),
        );
    }

    return highestHappiness;
}

function main() {
    const input: string = getFileContent('2015/13/input.txt');

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
