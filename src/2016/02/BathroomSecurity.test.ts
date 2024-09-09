import { describe, it, expect } from 'vitest';
import { findNextKey, partOne, partTwo } from './BathroomSecurity.ts';

describe('BathroomSecurity:Part one', () => {
    it('no directions', () => {
        const result = partOne(['']);
        expect(result).toBe(5);
    });

    it('one direction', () => {
        const result = partOne(['U']);
        expect(result).toBe(2);
    });

    it('multiple single digit directions', () => {
        const result = partOne(['ULL']);
        expect(result).toBe(1);
    });

    it('multiple multi digit directions', () => {
        const result = partOne(['ULL', 'RRDDD', 'LURDL', 'UUUUD']);
        expect(result).toBe(1985);
    });
});

describe('BathroomSecurity:Part Two', () => {
    it('no directions', () => {
        const result = partTwo(['']);
        expect(result).toBe('5');
    });

    it('one direction', () => {
        const result = partTwo(['U']);
        expect(result).toBe('5');
    });

    it('multiple single digit directions', () => {
        const result = partTwo(['ULL']);
        expect(result).toBe('5');
    });

    it('multiple multi digit directions', () => {
        const result = partTwo(['ULL', 'RRDDD', 'LURDL', 'UUUUD']);
        expect(result).toBe('5DB3');
    });
});

describe('BathroomSecurity:Find Next Key', () => {
    it('should return 2 on a U from a 5', () => {
        const result = findNextKey(5, 'U');
        expect(result).toBe(2);
    });

    it('should return 8 on a D from a 5', () => {
        const result = findNextKey(5, 'D');
        expect(result).toBe(8);
    });

    it('should return 4 on a L from a 5', () => {
        const result = findNextKey(5, 'L');
        expect(result).toBe(4);
    });

    it('should return 6 on a R from a 5', () => {
        const result = findNextKey(5, 'R');
        expect(result).toBe(6);
    });

    it('should return 6 on a D from a 3', () => {
        const result = findNextKey(3, 'D');
        expect(result).toBe(6);
    });

    it('should return 2 on a L from a 3', () => {
        const result = findNextKey(3, 'L');
        expect(result).toBe(2);
    });

    it('should return 4 on a U from a 7', () => {
        const result = findNextKey(7, 'U');
        expect(result).toBe(4);
    });
});
