import { describe, it, expect } from 'vitest';
import { partOne, partTwo } from './SphericalHouses.ts';

describe('SphericalHouses:Part one', () => {
    it('example input 1', () => {
        const result = partOne('>');
        expect(result).toBe(2);
    });

    it('example input 2', () => {
        const result = partOne('^>v<');
        expect(result).toBe(4);
    });

    it('example input 3', () => {
        const result = partOne('^v^v^v^v^v');
        expect(result).toBe(2);
    });
});

describe('SphericalHouses:Part Two', () => {
    it('example input 1', () => {
        const result = partTwo('^v');
        expect(result).toBe(3);
    });

    it('example input 2', () => {
        const result = partTwo('^>v<');
        expect(result).toBe(3);
    });

    it('example input 3', () => {
        const result = partTwo('^v^v^v^v^v');
        expect(result).toBe(11);
    });
});
