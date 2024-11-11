import { describe, it, expect } from 'vitest';
import { partOne, partTwo } from './WastelandNavigation.js';

const input1 =
    'RL\n' +
    '\n' +
    'AAA = (BBB, CCC)\n' +
    'BBB = (DDD, EEE)\n' +
    'CCC = (ZZZ, GGG)\n' +
    'DDD = (DDD, DDD)\n' +
    'EEE = (EEE, EEE)\n' +
    'GGG = (GGG, GGG)\n' +
    'ZZZ = (ZZZ, ZZZ)';

const input2 =
    'LLR\n' +
    '\n' +
    'AAA = (BBB, BBB)\n' +
    'BBB = (AAA, ZZZ)\n' +
    'ZZZ = (ZZZ, ZZZ)';

const input3 =
    'LR\n' +
    '\n' +
    '11A = (11B, XXX)\n' +
    '11B = (XXX, 11Z)\n' +
    '11Z = (11B, XXX)\n' +
    '22A = (22B, XXX)\n' +
    '22B = (22C, 22C)\n' +
    '22C = (22Z, 22Z)\n' +
    '22Z = (22B, 22B)\n' +
    'XXX = (XXX, XXX)';

describe('WastelandNavigation:Part one', () => {
    it('example input', () => {
        const result = partOne(input1);
        expect(result).toBe(2);
    });

    it('example input 2', () => {
        const result = partOne(input2);
        expect(result).toBe(6);
    });
});

describe('WastelandNavigation:Part Two', () => {
    it('example input', () => {
        const result = partTwo(input3);
        expect(result).toBe(6);
    });
});
