import { describe, it, expect } from 'vitest';
import { getNextHeading, partOne, partTwo } from './FindingEasterBunnyHq.ts';

describe('FindingEasterBunnyHq:Part one', () => {
    it('no directions', () => {
        const result = partOne([]);
        expect(result).toBe(0);
    });

    it('one right direction', () => {
        const directions = ['R1'];
        const result = partOne(directions);
        expect(result).toBe(1);
    });

    it('one left direction', () => {
        const directions = ['L1'];
        const result = partOne(directions);
        expect(result).toBe(1);
    });

    it('two directions', () => {
        const directions = ['R1', 'R1'];
        const result = partOne(directions);
        expect(result).toBe(2);
    });

    it('circle directions', () => {
        const directions = ['R1', 'R1', 'R1', 'R1'];
        const result = partOne(directions);
        expect(result).toBe(0);
    });

    it('one multi step direction', () => {
        const directions = ['R10'];
        const result = partOne(directions);
        expect(result).toBe(10);
    });
});

describe('FindingEasterBunnyHq:Part Two', () => {
    it('circle directions, stopping at a previous point', () => {
        const directions = ['R1', 'R1', 'R1', 'R1', 'R15'];
        const result = partTwo(directions);
        expect(result).toBe(0);
    });

    it('circle directions, traveling through a previous point', () => {
        const directions = ['R8', 'R4', 'R4', 'R8'];
        const result = partTwo(directions);
        expect(result).toBe(4);
    });
});

describe('FindingEasterBunnyHq:Get Next Heading', () => {
    it('should return E on a right turn from N', () => {
        const result = getNextHeading('N', true);
        expect(result).toBe('E');
    });

    it('should return S on a right turn from E', () => {
        const result = getNextHeading('E', true);
        expect(result).toBe('S');
    });

    it('should return W on a right turn from S', () => {
        const result = getNextHeading('S', true);
        expect(result).toBe('W');
    });

    it('should return N on a right turn from W', () => {
        const result = getNextHeading('W', true);
        expect(result).toBe('N');
    });

    it('should return W on a left turn from N', () => {
        const result = getNextHeading('N', false);
        expect(result).toBe('W');
    });
});
