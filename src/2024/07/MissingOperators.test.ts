import { describe, it, expect } from 'vitest';
import { partOne, partTwo } from './MissingOperators.js';

describe('MissingOperators:Part one', () => {
    it('example input 1', () => {
        const result = partOne(['190: 10 19']);
        expect(result).toBe(190);
    });

    it('example input 2', () => {
        const result = partOne(['3267: 81 40 27']);
        expect(result).toBe(3267);
    });

    it('example input 3', () => {
        const result = partOne(['292: 11 6 16 20']);
        expect(result).toBe(292);
    });

    it('example input 4', () => {
        const result = partOne([
            '190: 10 19',
            '3267: 81 40 27',
            '83: 17 5',
            '156: 15 6',
            '7290: 6 8 6 15',
            '161011: 16 10 13',
            '192: 17 8 14',
            '21037: 9 7 18 13',
            '292: 11 6 16 20',
        ]);
        expect(result).toBe(3749);
    });
});

describe('MissingOperators:Part Two', () => {
    it('example input 1', () => {
        const result = partTwo(['156: 15 6']);
        expect(result).toBe(156);
    });

    it('example input 2', () => {
        const result = partTwo(['7290: 6 8 6 15']);
        expect(result).toBe(7290);
    });

    it('example input 3', () => {
        const result = partTwo([
            '190: 10 19',
            '3267: 81 40 27',
            '83: 17 5',
            '156: 15 6',
            '7290: 6 8 6 15',
            '161011: 16 10 13',
            '192: 17 8 14',
            '21037: 9 7 18 13',
            '292: 11 6 16 20',
        ]);
        expect(result).toBe(11387);
    });
});
