import { describe, expect, it } from 'vitest';
import { partOne, partTwo } from './Cafeteria.ts';

describe('template:Part one', () => {
    it('example input 1', () => {
        const result = partOne([
            ['3-5', '10-14', '16-20', '12-18'],
            ['1', '5', '8', '11', '17', '32'],
        ]);
        expect(result).toBe(3);
    });
});

describe('template:Part two', () => {
    it('example input 1', () => {
        const result = partTwo([
            ['10-14', '16-20', '12-18', '3-5'],
            ['1', '5', '8', '11', '17', '32'],
        ]);
        expect(result).toBe(14);
    });
});
