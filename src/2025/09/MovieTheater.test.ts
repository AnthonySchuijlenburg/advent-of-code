import { describe, expect, it } from 'vitest';
import { partOne, partTwo } from './MovieTheater.ts';

describe('template:Part one', () => {
    it('example input 1', () => {
        const result = partOne([
            '7,1',
            '11,1',
            '11,7',
            '9,7',
            '9,5',
            '2,5',
            '2,3',
            '7,3',
        ]);
        expect(result).toBe(50);
    });
});

describe('template:Part two', () => {
    it('example input 1', () => {
        const result = partTwo([
            '7,1',
            '11,1',
            '11,7',
            '9,7',
            '9,5',
            '2,5',
            '2,3',
            '7,3',
        ]);
        expect(result).toBe(24);
    });

    it('example input 2', () => {
        const result = partTwo([
            '1,0',
            '3,0',
            '3,6',
            '16,6',
            '16,0',
            '18,0',
            '18,9',
            '13,9',
            '13,7',
            '6,7',
            '6,9',
            '1,9',
        ]);
        expect(result).toBe(30);
    });
});
