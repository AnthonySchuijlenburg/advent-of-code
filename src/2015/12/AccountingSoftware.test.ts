import { describe, it, expect } from 'vitest';
import { partOne, partTwo, sumValues } from './AccountingSoftware.ts';

describe('AccountingSoftware:Sum Values', () => {
    it('example input 1', () => {
        const result = sumValues({ a: 1, b: 1 });
        expect(result).toBe(2);
    });

    it('example input 2', () => {
        const result = sumValues({ a: 10, b: 15 });
        expect(result).toBe(25);
    });

    it('example input 3', () => {
        const result = sumValues({ a: { b: 4 }, c: -1 });
        expect(result).toBe(3);
    });

    it('example input 4', () => {
        const result = sumValues({ a: { b: [-1, { a: 1 }] }, c: -1 });
        expect(result).toBe(-1);
    });

    it('example input 5', () => {
        const result = sumValues({});
        expect(result).toBe(0);
    });

    it('example input 6', () => {
        const result = sumValues({ a: 'blue' });
        expect(result).toBe(0);
    });
});

describe('AccountingSoftware:Part one', () => {
    it('example input 1', () => {
        const result = partOne('{"a":2,"b":4}');
        expect(result).toBe(6);
    });

    it('example input 1', () => {
        const result = partOne('{"d":"red","e":[1,2,3,4],"f":5}');
        expect(result).toBe(15);
    });
});

describe('AccountingSoftware:Part Two', () => {
    it('example input 1', () => {
        const result = partTwo('{"d":"red","e":[1,2,3,4],"f":5}');
        expect(result).toBe(0);
    });
});
