import { describe, it, expect } from 'vitest';
import { doRounds, partOne, partTwo } from './LookAndSay.ts';

describe('LookAndSay:Do Rounds', () => {
    it('example input 1', () => {
        const result = doRounds('1', 1);
        expect(result).toBe('11');
    });

    it('example input 2', () => {
        const result = doRounds('11', 1);
        expect(result).toBe('21');
    });

    it('example input 3', () => {
        const result = doRounds('21', 1);
        expect(result).toBe('1211');
    });

    it('example input 4', () => {
        const result = doRounds('111221', 1);
        expect(result).toBe('312211');
    });

    it('example input 5', () => {
        const result = doRounds('1', 5);
        expect(result).toBe('312211');
    });
});

describe('LookAndSay:Part one', () => {
    it('example input 1', () => {
        const result = partOne('1');
        expect(result).toBe(82350);
    });
});

describe('LookAndSay:Part Two', () => {
    it('example input 1', () => {
        const result = partTwo('1');
        expect(result).toBe(1166642);
    });
});
