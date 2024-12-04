import { describe, it, expect } from 'vitest';
import { partOne, partTwo } from './WordSearch.js';

describe('WordSearch:Part one', () => {
    it('example input 1', () => {
        const result = partOne([
            '..X...',
            '.SAMX.',
            '.A..A.',
            'XMAS.S',
            '.X....',
        ]);
        expect(result).toBe(4);
    });

    it('example input 2', () => {
        const result = partOne([
            'MMMSXXMASM',
            'MSAMXMSMSA',
            'AMXSXMAAMM',
            'MSAMASMSMX',
            'XMASAMXAMM',
            'XXAMMXXAMA',
            'SMSMSASXSS',
            'SAXAMASAAA',
            'MAMMMXMMMM',
            'MXMXAXMASX',
        ]);
        expect(result).toBe(18);
    });
});

describe('WordSearch:Part Two', () => {
    it('example input 1', () => {
        const result = partTwo(['M.S', '.A.', 'M.S']);
        expect(result).toBe(1);
    });

    it('example input 2', () => {
        const result = partTwo([
            'MMMSXXMASM',
            'MSAMXMSMSA',
            'AMXSXMAAMM',
            'MSAMASMSMX',
            'XMASAMXAMM',
            'XXAMMXXAMA',
            'SMSMSASXSS',
            'SAXAMASAAA',
            'MAMMMXMMMM',
            'MXMXAXMASX',
        ]);
        expect(result).toBe(9);
    });
});
