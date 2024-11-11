import { describe, it, expect } from 'vitest';
import { partOne, partTwo } from './FixingTheSeeds.js';

const input =
    'seeds: 79 14 55 13\n' +
    '\n' +
    'seed-to-soil map:\n' +
    '50 98 2\n' +
    '52 50 48\n' +
    '\n' +
    'soil-to-fertilizer map:\n' +
    '0 15 37\n' +
    '37 52 2\n' +
    '39 0 15\n' +
    '\n' +
    'fertilizer-to-water map:\n' +
    '49 53 8\n' +
    '0 11 42\n' +
    '42 0 7\n' +
    '57 7 4\n' +
    '\n' +
    'water-to-light map:\n' +
    '88 18 7\n' +
    '18 25 70\n' +
    '\n' +
    'light-to-temperature map:\n' +
    '45 77 23\n' +
    '81 45 19\n' +
    '68 64 13\n' +
    '\n' +
    'temperature-to-humidity map:\n' +
    '0 69 1\n' +
    '1 0 69\n' +
    '\n' +
    'humidity-to-location map:\n' +
    '60 56 37\n' +
    '56 93 4';

describe('ScratchCards:Part one', () => {
    it('example input', () => {
        const result = partOne(input);
        expect(result).toBe(35);
    });
});

describe('ScratchCards:Part Two', () => {
    it('example input', () => {
        const result = partTwo(input);
        expect(result).toBe(46);
    });
});
