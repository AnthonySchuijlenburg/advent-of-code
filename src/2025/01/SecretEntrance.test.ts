import { describe, it, expect } from 'vitest';
import { partOne, partTwo } from './SecretEntrance.ts';

describe('SecretEntrance:Part one', () => {
    it('example input 1', () => {
        const result = partOne([
            'L68',
            'L30',
            'R48',
            'L5',
            'R60',
            'L55',
            'L1',
            'L99',
            'R14',
            'L82',
        ]);
        expect(result).toBe(3);
    });
});

describe('SecretEntrance:Part two', () => {
    it('example input 1', () => {
        const result = partTwo([
            'L68',
            'L30',
            'R48',
            'L5',
            'R60',
            'L55',
            'L1',
            'L99',
            'R14',
            'L82',
        ]);
        expect(result).toBe(6);
    });

    it('example input 2', () => {
        const result = partTwo(['L50', 'L5']);
        expect(result).toBe(1);
    });

    it('example input 3', () => {
        const result = partTwo(['R50', 'R5']);
        expect(result).toBe(1);
    });
});
