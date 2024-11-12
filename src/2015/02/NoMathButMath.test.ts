import { describe, it, expect } from 'vitest';
import { partOne, partTwo } from './NoMathButMath.ts';

describe('NoMathButMath:Part one', () => {
    it('example input 1', () => {
        const result = partOne(['2x3x4']);
        expect(result).toBe(58);
    });

    it('example input 2', () => {
        const result = partOne(['1x1x10']);
        expect(result).toBe(43);
    });
});

describe('NoMathButMath:Part Two', () => {
    it('example input 1', () => {
        const result = partTwo(['2x3x4']);
        expect(result).toBe(34);
    });

    it('example input 2', () => {
        const result = partTwo(['1x1x10']);
        expect(result).toBe(14);
    });
});
