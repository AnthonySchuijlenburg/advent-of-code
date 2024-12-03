import { describe, it, expect } from 'vitest';
import { partOne, partTwo } from './MemoryIssues.js';

describe('MemoryIssues:Part one', () => {
    it('example input', () => {
        const result = partOne([
            'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))',
        ]);
        expect(result).toBe(161);
    });
});

describe('MemoryIssues:Part Two', () => {
    it('example input 1', () => {
        const result = partTwo([
            "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))",
        ]);
        expect(result).toBe(48);
    });

    it('example input 2', () => {
        const result = partTwo([
            "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undon't()?mul(8,5))",
        ]);
        expect(result).toBe(8);
    });
});
