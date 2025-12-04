import { describe, expect, it } from 'vitest';
import { partOne, partTwo } from './PrintingDepartment.ts';

describe('PrintingDepartment:Part one', () => {
    it('example input 1', () => {
        const result = partOne([
            '..@@.@@@@.',
            '@@@.@.@.@@',
            '@@@@@.@.@@',
            '@.@@@@..@.',
            '@@.@@@@.@@',
            '.@@@@@@@.@',
            '.@.@.@.@@@',
            '@.@@@.@@@@',
            '.@@@@@@@@.',
            '@.@.@@@.@.',
        ]);
        expect(result).toBe(13);
    });
});

describe('PrintingDepartment:Part two', () => {
    it('example input 1', () => {
        const result = partTwo([
            '..@@.@@@@.',
            '@@@.@.@.@@',
            '@@@@@.@.@@',
            '@.@@@@..@.',
            '@@.@@@@.@@',
            '.@@@@@@@.@',
            '.@.@.@.@@@',
            '@.@@@.@@@@',
            '.@@@@@@@@.',
            '@.@.@@@.@.',
        ]);
        expect(result).toBe(43);
    });
});
