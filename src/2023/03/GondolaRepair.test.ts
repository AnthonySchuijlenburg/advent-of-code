import { describe, it, expect } from 'vitest';
import { partOne, partTwo } from './GondolaRepair.js';

describe('GondolaRepair:Part one', () => {
    it('example input', () => {
        const result = partOne(
            '467..114..\n' +
                '...*......\n' +
                '..35..633.\n' +
                '......#...\n' +
                '617*......\n' +
                '.....+.58.\n' +
                '..592.....\n' +
                '......755.\n' +
                '...$.*....\n' +
                '.664.598..',
        );
        expect(result).toBe(4361);
    });
});

describe('GondolaRepair:Part Two', () => {
    it('example input', () => {
        const result = partTwo(
            '467..114..\n' +
                '...*......\n' +
                '..35..633.\n' +
                '......#...\n' +
                '617*......\n' +
                '.....+.58.\n' +
                '..592.....\n' +
                '......755.\n' +
                '...$.*....\n' +
                '.664.598..',
        );
        expect(result).toBe(467835);
    });
});
