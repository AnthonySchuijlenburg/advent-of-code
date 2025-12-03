import { describe, expect, it } from 'vitest';
import { partOne, partTwo } from './OpeningTheTuringLock.ts';

describe('OpeningTheTuringLock:Part one', () => {
    it('example input 1', () => {
        const result = partOne(['inc a', 'jio a, +2', 'tpl a', 'inc a']);
        expect(result).toBe(0);
    });

    it('example input 2', () => {
        const result = partOne(['inc b', 'jio a, +2', 'tpl a', 'inc b']);
        expect(result).toBe(2);
    });

    it('example input 3', () => {
        const result = partOne(['inc b', 'inc b', 'hlf b']);
        expect(result).toBe(1);
    });

    it('example input 4', () => {
        const result = partOne(['inc b', 'inc b', 'tpl b']);
        expect(result).toBe(6);
    });

    it('example input 5', () => {
        const result = partOne(['jmp 2', 'inc b', 'tpl b']);
        expect(result).toBe(0);
    });

    it('example input 6', () => {
        const result = partOne(['inc b', 'jie b, 1', 'inc b']);
        expect(result).toBe(2);
    });

    it('example input 7', () => {
        const result = partOne(['inc b', 'inc b', 'jie b, 2', 'inc b']);
        expect(result).toBe(2);
    });

    it('example input 8', () => {
        const result = partOne(['inc b', 'jio b, 2', 'inc b']);
        expect(result).toBe(1);
    });

    it('example input 9', () => {
        const result = partOne(['inc b', 'inc b', 'jio b, 1', 'inc b']);
        expect(result).toBe(3);
    });

    it('example input 10', () => {
        const result = partOne(['inc b', 'jio b, -1', 'inc b']);
        expect(result).toBe(3);
    });
});

describe('OpeningTheTuringLock:Part two', () => {
    it('example input 1', () => {
        const result = partTwo(['jio a, +4', 'inc b', 'tpl b', 'inc b']);
        expect(result).toBe(0);
    });
});
