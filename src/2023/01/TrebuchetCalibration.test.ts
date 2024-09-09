import { describe, it, expect } from 'vitest';
import { partOne, partTwo } from './TrebuchetCalibration';

describe('TrebuchetCalibration:Part one', () => {
    it('should return 1', () => {
        const result = partOne();
        expect(result).toBe(1);
    });
});

describe('TrebuchetCalibration:Part Two', () => {
    it('should return 2', () => {
        const result = partTwo();
        expect(result).toBe(2);
    });
});
