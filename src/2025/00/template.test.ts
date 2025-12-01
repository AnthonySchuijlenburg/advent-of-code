import { describe, it, expect } from 'vitest';
import { partOne, partTwo } from './template.ts';

describe('template:Part one', () => {
    it('example input 1', () => {
        const result = partOne([]);
        expect(result).toBe(0);
    });
});

describe('template:Part two', () => {
    it('example input 1', () => {
        const result = partTwo([]);
        expect(result).toBe(0);
    });
});
