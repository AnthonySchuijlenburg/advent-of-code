import { describe, it, expect } from 'vitest';
import { partOne, partTwo } from './TablePositions.ts';

describe('TablePositions:Part one', () => {
    it('example input 1', () => {
        const result = partOne([
            'Alice would gain 54 happiness units by sitting next to Bob.',
            'Alice would lose 79 happiness units by sitting next to Carol.',
            'Alice would lose 2 happiness units by sitting next to David.',
            'Bob would gain 83 happiness units by sitting next to Alice.',
            'Bob would lose 7 happiness units by sitting next to Carol.',
            'Bob would lose 63 happiness units by sitting next to David.',
            'Carol would lose 62 happiness units by sitting next to Alice.',
            'Carol would gain 60 happiness units by sitting next to Bob.',
            'Carol would gain 55 happiness units by sitting next to David.',
            'David would gain 46 happiness units by sitting next to Alice.',
            'David would lose 7 happiness units by sitting next to Bob.',
            'David would gain 41 happiness units by sitting next to Carol.',
        ]);
        expect(result).toBe(330);
    });
});

describe('TablePositions:Part Two', () => {
    it('example input 1', () => {
        const result = partTwo([
            'Alice would gain 54 happiness units by sitting next to Bob.',
            'Alice would lose 79 happiness units by sitting next to Carol.',
            'Alice would lose 2 happiness units by sitting next to David.',
            'Bob would gain 83 happiness units by sitting next to Alice.',
            'Bob would lose 7 happiness units by sitting next to Carol.',
            'Bob would lose 63 happiness units by sitting next to David.',
            'Carol would lose 62 happiness units by sitting next to Alice.',
            'Carol would gain 60 happiness units by sitting next to Bob.',
            'Carol would gain 55 happiness units by sitting next to David.',
            'David would gain 46 happiness units by sitting next to Alice.',
            'David would lose 7 happiness units by sitting next to Bob.',
            'David would gain 41 happiness units by sitting next to Carol.',
        ]);
        expect(result).toBe(286);
    });
});
