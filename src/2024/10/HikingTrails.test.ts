import { describe, it, expect } from 'vitest';
import { partOne, partTwo } from './HikingTrails.js';

describe('HikingTrails:Part one', () => {
    it('example input 1', () => {
        const result = partOne(['0123', '1234', '8765', '9876']);
        expect(result).toBe(1);
    });

    it('example input 2', () => {
        const result = partOne([
            '4440444',
            '4441444',
            '4442444',
            '6543456',
            '7444447',
            '8444448',
            '9444449',
        ]);
        expect(result).toBe(2);
    });

    it('example input 3', () => {
        const result = partOne([
            '89010123',
            '78121874',
            '87430965',
            '96549874',
            '45678903',
            '32019012',
            '01329801',
            '10456732',
        ]);
        expect(result).toBe(36);
    });
});

describe('HikingTrails:Part Two', () => {
    it('example input 1', () => {
        const result = partTwo([
            '89010123',
            '78121874',
            '87430965',
            '96549874',
            '45678903',
            '32019012',
            '01329801',
            '10456732',
        ]);
        expect(result).toBe(81);
    });
});
