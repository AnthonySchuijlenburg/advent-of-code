import { describe, it, expect } from 'vitest';
import { partOne, partTwo } from './StockingStuffers.ts';

describe('StockingStuffers:Part one', () => {
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
