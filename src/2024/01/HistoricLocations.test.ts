import { describe, it, expect } from 'vitest';
import { partOne, partTwo } from './HistoricLocations.js';

describe('HistoricLocations:Part one', () => {
    it('example input', () => {
        const result = partOne([
            '3   4',
            '4   3',
            '2   5',
            '1   3',
            '3   9',
            '3   3',
        ]);
        expect(result).toBe(11);
    });
});

describe('HistoricLocations:Part Two', () => {
    it('example input', () => {
        const result = partTwo([
            '3   4',
            '4   3',
            '2   5',
            '1   3',
            '3   9',
            '3   3',
        ]);
        expect(result).toBe(31);
    });
});
