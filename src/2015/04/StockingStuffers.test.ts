import { describe, it, expect } from 'vitest';
import { partOne, partTwo } from './StockingStuffers.ts';

describe('StockingStuffers:Part one', () => {
    it('example input 1', () => {
        const result = partOne('abcdef');
        expect(result).toBe(609043);
    });

    it('example input 2', () => {
        const result = partOne('pqrstuv');
        expect(result).toBe(1048970);
    });

    it('fast input 1', () => {
        // input found by looking for the input that would result in the lowest number of hashes
        const result = partOne('ajte');
        expect(result).toBe(5);
    });
});

describe('StockingStuffers:Part Two', () => {
    it('fast input 1', () => {
        // input found by looking for the input that would result in the lowest number of hashes
        const result = partTwo('ldf');
        expect(result).toBe(301);
    });
});
