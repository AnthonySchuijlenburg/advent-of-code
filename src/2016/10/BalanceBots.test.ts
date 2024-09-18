import { describe, it, expect } from 'vitest';
import { partTwo } from './BalanceBots.ts';

describe('ExplosivesInCyberspace:Part Two', () => {
    it('should multiply the result of the first three outputs', async () => {
        const result = partTwo([
            'value 5 goes to bot 2',
            'bot 2 gives low to bot 1 and high to bot 0',
            'value 3 goes to bot 1',
            'bot 1 gives low to output 1 and high to bot 0',
            'bot 0 gives low to output 2 and high to output 0',
            'value 2 goes to bot 2',
        ]);

        expect(result).toStrictEqual(30);
    });
});
