import { describe, expect, it } from 'vitest';
import { partOne, partTwo } from './Lobby.ts';

describe('Lobby:Part one', () => {
    it('example input 1', () => {
        const result = partOne([
            '987654321111111',
            '811111111111119',
            '234234234234278',
            '818181911112111',
        ]);
        expect(result).toBe(357);
    });
});

describe('Lobby:Part two', () => {
    it('example input 1', () => {
        const result = partTwo([
            '987654321111111',
            '811111111111119',
            '234234234234278',
            '818181911112111',
        ]);
        expect(result).toBe(3121910778619);
    });
});
