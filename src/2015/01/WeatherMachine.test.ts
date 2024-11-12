import { describe, it, expect } from 'vitest';
import { partOne, partTwo } from './WeatherMachine.ts';

describe('WeatherMachine:Part one', () => {
    it('no directions', () => {
        const result = partOne('');
        expect(result).toBe(0);
    });

    it('one directions', () => {
        const result = partOne('(');
        expect(result).toBe(1);
    });

    it('two directions', () => {
        const result = partOne('()');
        expect(result).toBe(0);
    });

    it('example input 1', () => {
        const result = partOne('(())');
        expect(result).toBe(0);
    });

    it('example input 2', () => {
        const result = partOne('()()');
        expect(result).toBe(0);
    });

    it('example input 3', () => {
        const result = partOne('(((');
        expect(result).toBe(3);
    });

    it('example input 4', () => {
        const result = partOne('))(((((');
        expect(result).toBe(3);
    });

    it('example input 5', () => {
        const result = partOne(')())())');
        expect(result).toBe(-3);
    });
});

describe('WeatherMachine:Part Two', () => {
    it('example input 1', () => {
        const result = partTwo(')');
        expect(result).toBe(1);
    });

    it('example input 2', () => {
        const result = partTwo('()())');
        expect(result).toBe(5);
    });
});
