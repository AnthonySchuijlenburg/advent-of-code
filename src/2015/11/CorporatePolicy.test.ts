import { describe, it, expect } from 'vitest';
import { increasePassword, partOne, partTwo } from './CorporatePolicy.ts';

describe('CorporatePolicy:Increase Password', () => {
    it('example input 1', () => {
        const result = increasePassword('aaa');
        expect(result).toBe('aab');
    });

    it('example input 2', () => {
        const result = increasePassword('aaz');
        expect(result).toBe('aba');
    });

    it('example input 2', () => {
        const result = increasePassword('azz');
        expect(result).toBe('baa');
    });

    it('example input 3', () => {
        const result = increasePassword('zzz');
        expect(result).toBe('aaaa');
    });
});

describe('CorporatePolicy:Part one', () => {
    it('example input 1', () => {
        const result = partOne('abcdefgh');
        expect(result).toBe('abcdffaa');
    });
});

describe('CorporatePolicy:Part Two', () => {
    it('example input 1', () => {
        const result = partTwo('abcdefgh');
        expect(result).toBe('abcdffbb');
    });
});
