import { describe, it, expect } from 'vitest';
import { partOne, partTwo } from './ClawContraption.js';

describe('ClawContraption:Part one', () => {
    it('example input 1', () => {
        const result = partOne([
            'Button A: X+94, Y+34\n' +
                'Button B: X+22, Y+67\n' +
                'Prize: X=8400, Y=5400',
        ]);
        expect(result).toBe(280);
    });

    it('example input 2', () => {
        const result = partOne([
            'Button A: X+26, Y+66\n' +
                'Button B: X+67, Y+21\n' +
                'Prize: X=12748, Y=12176',
        ]);
        expect(result).toBe(0);
    });

    it('example input 3', () => {
        const result = partOne([
            'Button A: X+17, Y+86\n' +
                'Button B: X+84, Y+37\n' +
                'Prize: X=7870, Y=6450',
        ]);
        expect(result).toBe(200);
    });
});

describe('ClawContraption:Part Two', () => {
    it('example input 1', () => {
        const result = partTwo([
            'Button A: X+94, Y+34\n' +
                'Button B: X+22, Y+67\n' +
                'Prize: X=8400, Y=5400',
        ]);
        expect(result).toBe(0);
    });

    it('example input 2', () => {
        const result = partTwo([
            'Button A: X+26, Y+66\n' +
                'Button B: X+67, Y+21\n' +
                'Prize: X=12748, Y=12176',
        ]);
        expect(result).toBe(459236326669);
    });
});
