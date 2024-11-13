import { describe, it, expect } from 'vitest';
import { partOne, partTwo } from './FireHazzard.ts';

describe('FireHazzard:Part one', () => {
    it('example input 1', () => {
        const result = partOne(['turn on 0,0 through 9,9'], 10);
        expect(result).toBe(100);
    });

    it('example input 2', () => {
        const result = partOne(['turn off 0,0 through 9,9'], 10);
        expect(result).toBe(0);
    });

    it('example input 3', () => {
        const result = partOne(['toggle 0,0 through 9,9'], 10);
        expect(result).toBe(100);
    });

    it('example input 1', () => {
        const result = partOne(
            ['turn on 0,0 through 0,0', 'turn off 0,0 through 9,9'],
            10,
        );
        expect(result).toBe(0);
    });

    it('example input 1', () => {
        const result = partOne(
            [
                'turn on 0,0 through 9,9',
                'toggle 0,0 through 9,0',
                'turn off 4,4 through 5,5',
            ],
            10,
        );
        expect(result).toBe(86);
    });
});

describe('FireHazzard:Part Two', () => {
    it('example input 1', () => {
        const result = partTwo(['turn on 0,0 through 0,0'], 10);
        expect(result).toBe(1);
    });

    it('example input 2', () => {
        const result = partTwo(
            [
                'turn on 0,0 through 9,9',
                'turn on 0,0 through 9,9',
                'toggle 0,0 through 9,9',
            ],
            10,
        );
        expect(result).toBe(400);
    });
});
