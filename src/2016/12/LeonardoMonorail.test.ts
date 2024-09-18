import { describe, it, expect } from 'vitest';
import { partOne } from './LeonardoMonorail.ts';

describe('ExplosivesInCyberspace:Decompress once', () => {
    it('should copy a value to a register', async () => {
        const result = partOne(['cpy 41 a']);

        expect(result).toStrictEqual(41);
    });

    it('should copy multiple values to a register', async () => {
        const result = partOne(['cpy 41 a', 'cpy 42 a']);

        expect(result).toStrictEqual(42);
    });

    it('should copy a register to another register', async () => {
        const result = partOne(['cpy 41 b', 'cpy b a']);

        expect(result).toStrictEqual(41);
    });

    it('should inc a register', async () => {
        const result = partOne(['cpy 41 a', 'inc a']);

        expect(result).toStrictEqual(42);
    });

    it('should dec a register', async () => {
        const result = partOne(['cpy 41 a', 'dec a']);

        expect(result).toStrictEqual(40);
    });

    it('should jump a step in the instructions', async () => {
        const result = partOne([
            'cpy 41 a',
            'inc a',
            'inc a',
            'dec a',
            'jnz a 2',
            'dec a',
        ]);

        expect(result).toStrictEqual(42);
    });

    it('should jump a step in the instructions with a non pointer', async () => {
        const result = partOne(['cpy 1 b', 'inc a', 'dec b', 'jnz b -2']);

        expect(result).toStrictEqual(1);
    });
});
