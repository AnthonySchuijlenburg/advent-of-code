import { describe, it, expect } from 'vitest';
import { partOne } from './LetItSnow.ts';

describe('LetItSnow:Part one', () => {
    it('example input 1', () => {
        const result = partOne([1, 1]);
        expect(result).toBe(20151125);
    });

    it('example input 2', () => {
        const result = partOne([1, 7]);
        expect(result).toBe(18736608);
    });
});
