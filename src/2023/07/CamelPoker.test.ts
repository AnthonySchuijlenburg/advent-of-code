import { describe, it, expect } from 'vitest';
import { partOne, partTwo } from './CamelPoker.js';

const input =
    '32T3K 765\n' + 'T55J5 684\n' + 'KK677 28\n' + 'KTJJT 220\n' + 'QQQJA 483';

describe('CamelPoker:Part one', () => {
    it('example input', () => {
        const result = partOne(input);
        expect(result).toBe(6440);
    });
});

describe('CamelPoker:Part Two', () => {
    it('example input', () => {
        const result = partTwo(input);
        expect(result).toBe(5905);
    });
});
