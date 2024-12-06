import { describe, it, expect } from 'vitest';
import { partOne, partTwo } from './SneakingAround.js';

describe('SneakingAround:Part one', () => {
    it('example input 1', () => {
        const result = partOne([
            '....#.....',
            '.........#',
            '..........',
            '..#.......',
            '.......#..',
            '..........',
            '.#..^.....',
            '........#.',
            '#.........',
            '......#...',
        ]);
        expect(result).toBe(41);
    });
});

describe('SneakingAround:Part Two', () => {
    it('example input 1', () => {
        const result = partTwo([
            '....#.....',
            '.........#',
            '..........',
            '..#.......',
            '.......#..',
            '..........',
            '.#..^.....',
            '........#.',
            '#.........',
            '......#...',
        ]);
        expect(result).toBe(6);
    });
});
