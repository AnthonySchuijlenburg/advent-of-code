import { describe, it, expect } from 'vitest';
import { isTrianglePossible, partOne, partTwo } from './ImpossibleTriangles.ts';

describe('ImpossibleTriangles:Part one', () => {
    it('should return 0 on no triangles', () => {
        const result = partOne([]);
        expect(result).toBe(0);
    });

    it('should return 1 on one valid triangle', () => {
        const result = partOne(['3 4 5']);
        expect(result).toBe(1);
    });

    it('should return 1 on one valid and one invalid triangle', () => {
        const result = partOne(['3 4 5', '5 10 25']);
        expect(result).toBe(1);
    });

    it('should return 2 on two valid triangles', () => {
        const result = partOne(['3 4 5', '10 10 10']);
        expect(result).toBe(2);
    });
});

describe('ImpossibleTriangles:Part Two', () => {
    it('should return 0 on no triangles', () => {
        const result = partTwo([]);
        expect(result).toBe(0);
    });

    it('should return 1 on one valid triangle', () => {
        const result = partTwo(['3 5 1', '4 10 1', '5 25 10']);
        expect(result).toBe(1);
    });

    it('should return 2 on two valid triangle', () => {
        const result = partTwo([
            '101 301 501',
            '102 302 502',
            '103 303 503',
            '201 401 601',
            '202 402 602',
            '203 403 603',
        ]);
        expect(result).toBe(6);
    });
});

describe('ImpossibleTriangles:Is Triangle Possible', () => {
    it('should return true on a 3, 4, 5 triangle', () => {
        const result = isTrianglePossible(3, 4, 5);
        expect(result).toBe(true);
    });

    it('should return true on a 10, 10, 10 triangle', () => {
        const result = isTrianglePossible(10, 10, 10);
        expect(result).toBe(true);
    });

    it('should return false on a 5, 10, 25 triangle', () => {
        const result = isTrianglePossible(5, 10, 25);
        expect(result).toBe(false);
    });

    it('should return false on a 1, 1, 10 triangle', () => {
        const result = isTrianglePossible(1, 1, 10);
        expect(result).toBe(false);
    });
});
