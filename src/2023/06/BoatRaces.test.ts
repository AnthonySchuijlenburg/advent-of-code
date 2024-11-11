import { describe, it, expect } from 'vitest';
import { partOne, partTwo } from './BoatRaces.js';

const input = 'Time:      7  15   30\nDistance:  9  40  200';

describe('BoatRaces:Part one', () => {
    it('example input', () => {
        const result = partOne(input);
        expect(result).toBe(288);
    });
});

describe('BoatRaces:Part Two', () => {
    it('example input', () => {
        const result = partTwo(input);
        expect(result).toBe(71503);
    });
});
