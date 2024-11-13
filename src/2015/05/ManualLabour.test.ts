import { describe, it, expect } from 'vitest';
import { partOne, partTwo } from './ManualLabour.ts';

describe('ManualLabour:Part one', () => {
    it('example input 1', () => {
        const result = partOne(['ugknbfddgicrmopn']);
        expect(result).toBe(1);
    });

    it('example input 2', () => {
        const result = partOne(['aaa']);
        expect(result).toBe(1);
    });

    it('example input 3', () => {
        const result = partOne(['jchzalrnumimnmhp']);
        expect(result).toBe(0);
    });

    it('example input 4', () => {
        const result = partOne(['haegwjzuvuyypxyu']);
        expect(result).toBe(0);
    });

    it('example input 5', () => {
        const result = partOne(['dvszwmarrgswjxmb']);
        expect(result).toBe(0);
    });
});

describe('ManualLabour:Part Two', () => {
    it('example input 1', () => {
        const result = partTwo(['qjhvhtzxzqqjkmpb']);
        expect(result).toBe(1);
    });

    it('example input 2', () => {
        const result = partTwo(['xxyxx']);
        expect(result).toBe(1);
    });

    it('example input 3', () => {
        const result = partTwo(['uurcxstgmygtbstg']);
        expect(result).toBe(0);
    });

    it('example input 4', () => {
        const result = partTwo(['ieodomkazucvgmuy']);
        expect(result).toBe(0);
    });

    it('edge case 1', () => {
        const result = partTwo(['mmrraba']);
        expect(result).toBe(0);
    });
});
