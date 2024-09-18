import { describe, it, expect } from 'vitest';
import { partOne, partTwo } from './ExplosivesInCyberSpace.ts';

describe('ExplosivesInCyberspace:Decompress once', () => {
    it('should not decompress an uncompressed string', async () => {
        const result = partOne('ADVENT');

        expect(result).toStrictEqual(6);
    });

    it('should decompress a compressed string', async () => {
        const result = partOne('A(1x5)BC');

        expect(result).toStrictEqual(7);
    });

    it('should decompress a compressed string, while handling each replace in isolation', async () => {
        const result = partOne('A(1x5)BC(1x5)D');

        expect(result).toStrictEqual(12);
    });

    it('should not decompress already decompressed string', async () => {
        const result = partOne('X(8x2)(3x3)ABCY');

        expect(result).toStrictEqual(18);
    });
});

describe('ExplosivesInCyberspace:Decompress', () => {
    it('should not decompress an uncompressed string', async () => {
        const result = partTwo('ADVENT');

        expect(result).toStrictEqual(6);
    });

    it('should decompress a compressed string', async () => {
        const result = partTwo('X(8x2)(3x3)ABCY');

        expect(result).toStrictEqual(20);
    });

    it('should decompress a compressed string, while handling each replace in isolation', async () => {
        const result = partTwo('A(1x5)BC(1x5)D');

        expect(result).toStrictEqual(12);
    });

    it('should decompress already decompressed strings', async () => {
        const result = partTwo('X(8x2)(3x3)ABCY');

        expect(result).toStrictEqual(20);
    });

    it('should not decompress already decompressed string', async () => {
        const result = partTwo('(27x12)(20x12)(13x14)(7x10)(1x12)A');

        expect(result).toStrictEqual(241920);
    });
});
