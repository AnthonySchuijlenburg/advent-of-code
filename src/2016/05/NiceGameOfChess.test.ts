import { describe, it, expect } from 'vitest';
import { findNextInterestingHash } from './NiceGameOfChess.js';

describe('NiceGameOfChess:Find Next Interesting Hash', () => {
    it('finds the next interesting string for a', async () => {
        const result = findNextInterestingHash('a', '5640');

        expect(result.nextChar).toBe('4');
        expect(result.secondChar).toBe('8');
        expect(result.inc).toBe(0);
    });

    it('finds the next interesting string for b', async () => {
        const result = findNextInterestingHash('b', 'f851');

        expect(result.nextChar).toBe('f');
        expect(result.secondChar).toBe('5');
        expect(result.inc).toBe(0);
    });

    it('finds the next interesting string for c', async () => {
        const result = findNextInterestingHash('c', '47cf');

        expect(result.nextChar).toBe('c');
        expect(result.secondChar).toBe('2');
        expect(result.inc).toBe(10);
    });
});
