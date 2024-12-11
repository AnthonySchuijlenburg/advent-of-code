import { describe, it, expect } from 'vitest';
import { getStonesAfterRounds, partOne, partTwo } from './WierdPebbles.js';

describe('WierdPebbles:Get Stones After Rounds', () => {
    it('example input 1', () => {
        const result = getStonesAfterRounds('0 1 10 99 999', 1);
        expect(result).toBe(7);
    });

    it('example input 2', () => {
        const result = getStonesAfterRounds('125 17', 1);
        expect(result).toEqual(3);
    });

    it('example input 3', () => {
        const result = getStonesAfterRounds('125 17', 2);
        expect(result).toEqual(4);
    });

    it('example input 4', () => {
        const result = getStonesAfterRounds('125 17', 3);
        expect(result).toEqual(5);
    });

    it('example input 5', () => {
        const result = getStonesAfterRounds('125 17', 4);
        expect(result).toEqual(9);
    });

    it('example input 6', () => {
        const result = getStonesAfterRounds('125 17', 6);
        expect(result).toBe(22);
    });
});

describe('WierdPebbles:Part one', () => {
    it('example input 1', () => {
        const result = partOne('125 17');
        expect(result).toBe(55312);
    });
});

describe('WierdPebbles:Part Two', () => {
    it('example input 1', () => {
        const result = partTwo('125 17');
        expect(result).toBe(65601038650482);
    });
});
