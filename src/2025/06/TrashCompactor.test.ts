import { describe, expect, it } from 'vitest';
import { partOne, partTwo } from './TrashCompactor.ts';

describe('template:Part one', () => {
    it('example input 1', () => {
        const result = partOne([
            '123 328  51 64 ',
            ' 45 64  387 23 ',
            '  6 98  215 314',
            '*   +   *   +  ',
        ]);
        expect(result).toBe(4277556);
    });
});

describe('template:Part two', () => {
    it('example input 1', () => {
        const result = partTwo([
            '123 328  51 64 ',
            ' 45 64  387 23 ',
            '  6 98  215 314',
            '*   +   *   +  ',
        ]);
        expect(result).toBe(3263827);
    });

    it('example input 2', () => {
        const result = partTwo(['22 64', '51 28', '65 97', '94  7', '+  * ']);
        expect(result).toBe(3072356);
    });
});
