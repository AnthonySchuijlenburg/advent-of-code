import { describe, expect, it } from 'vitest';
import { partOne, partTwo } from './ItHangsInTheBalance.ts';

describe('ItHangsInTheBalance:Part one', () => {
    it('example input 1', () => {
        const result = partOne([1, 2, 3, 4, 5, 7, 8, 9, 10, 11]);
        expect(result).toBe(99);
    });
});

describe('ItHangsInTheBalance:Part two', () => {
    it('example input 1', () => {
        const result = partTwo([1, 2, 3, 4, 5, 7, 8, 9, 10, 11]);
        expect(result).toBe(44);
    });
});
