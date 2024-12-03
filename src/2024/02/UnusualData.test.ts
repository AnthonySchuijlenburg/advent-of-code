import { describe, it, expect } from 'vitest';
import { partOne, partTwo } from './UnusualData.js';

describe('Unusual Data:Part one', () => {
    it('example input', () => {
        const result = partOne([
            '7 6 4 2 1',
            '1 2 7 8 9',
            '9 7 6 2 1',
            '1 3 2 4 5',
            '8 6 4 4 1',
            '1 3 6 7 9',
        ]);
        expect(result).toBe(2);
    });
});

describe('Unusual Data:Part Two', () => {
    it('example input 1', () => {
        const result = partTwo([
            '7 6 4 2 1',
            '1 2 7 8 9',
            '9 7 6 2 1',
            '1 3 2 4 5',
            '8 6 4 4 1',
            '1 3 6 7 9',
        ]);
        expect(result).toBe(4);
    });

    it('example input 2', () => {
        const result = partTwo(['75 77 72 70 69']);
        expect(result).toBe(1);
    });

    it('example input 3', () => {
        const result = partTwo(['1 1 2 3 4']);
        expect(result).toBe(1);
    });

    it('example input 4', () => {
        const result = partTwo(['2 1 2 3 4 5 6']);
        expect(result).toBe(1);
    });
});
