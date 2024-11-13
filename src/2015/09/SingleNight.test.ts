import { describe, it, expect } from 'vitest';
import { partOne, partTwo } from './SingleNight.ts';

describe('SingleNight:Part one', () => {
    it('example input 1', () => {
        const result = partOne([
            'London to Dublin = 464',
            'London to Belfast = 518',
            'Dublin to Belfast = 141',
        ]);
        expect(result).toBe(605);
    });
});

describe('SingleNight:Part Two', () => {
    it('example input 1', () => {
        const result = partTwo([
            'London to Dublin = 464',
            'London to Belfast = 518',
            'Dublin to Belfast = 141',
        ]);
        expect(result).toBe(982);
    });
});
