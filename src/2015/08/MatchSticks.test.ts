import { describe, it, expect } from 'vitest';
import { partOne, partTwo } from './MatchSticks.ts';

describe('MatchSticks:Part one', () => {
    it('example input 1', () => {
        const result = partOne(['""']);
        expect(result).toBe(2);
    });

    it('example input 2', () => {
        const result = partOne(['"\\x27"']);
        expect(result).toBe(5);
    });

    it('example input 3', () => {
        const result = partOne(['"aaa\\"aaa"']);
        expect(result).toBe(3);
    });

    it('example input 4', () => {
        const result = partOne(['"\\xmy"']);
        expect(result).toBe(2);
    });
});

describe('MatchSticks:Part Two', () => {
    it('example input 1', () => {
        const result = partTwo(['""']);
        expect(result).toBe(4);
    });

    it('example input 2', () => {
        const result = partTwo(['"aaa\\"aaa"']);
        expect(result).toBe(6);
    });

    it('example input 3', () => {
        const result = partTwo(['"\\x27"']);
        expect(result).toBe(5);
    });
});
