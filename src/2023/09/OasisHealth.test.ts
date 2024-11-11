import { describe, it, expect } from 'vitest';
import { partOne, partTwo } from './OasisHealth.js';

const input = '0 3 6 9 12 15\n' + '1 3 6 10 15 21\n' + '10 13 16 21 30 45';

describe('OasisHealth:Part one', () => {
    it('example input', () => {
        const result = partOne(input);
        expect(result).toBe(114);
    });
});

describe('OasisHealth:Part Two', () => {
    it('example input', () => {
        const result = partTwo(input);
        expect(result).toBe(2);
    });
});
