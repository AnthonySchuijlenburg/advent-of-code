import { describe, it, expect } from 'vitest';
import { partOne, partTwo } from './CompressingSpace.js';

describe('CompressingSpace:Part one', () => {
    it('example input 1', () => {
        const result = partOne('2333133121414131402');
        expect(result).toBe(1928);
    });
});

describe('CompressingSpace:Part Two', () => {
    it('example input 1', () => {
        const result = partTwo('2333133121414131402');
        expect(result).toBe(2858);
    });
});
