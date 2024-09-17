import { describe, it, expect } from 'vitest';
import { partOne, partTwo } from './InternetProtocol.js';

describe('InternetProtocol:Part One', () => {
    it('should find one supported string', async () => {
        const result = partOne(['abba[mnop]qrst']);

        expect(result).toStrictEqual(1);
    });

    it('should find no supported string', async () => {
        const result = partOne(['aaaa[qwer]tyui']);

        expect(result).toStrictEqual(0);
    });

    it('should find one supported string, from longer input', async () => {
        const result = partOne(['abba[mnop]qrst[qrst]qrst']);

        expect(result).toStrictEqual(1);
    });

    it('should find one supported string, from more complex input', async () => {
        const result = partOne(['bbaj[mnop]qrst[qrst]abba']);

        expect(result).toStrictEqual(1);
    });

    it('should find one supported and one unsupported string', async () => {
        const result = partOne(['abba[mnop]qrst', 'abcd[bddb]xyyx']);

        expect(result).toStrictEqual(1);
    });

    it('should find two supported and two unsupported strings', async () => {
        const result = partOne([
            'abba[mnop]qrst',
            'abcd[bddb]xyyx',
            'aaaa[qwer]tyui',
            'ioxxoj[asdfgh]zxcvbn',
        ]);

        expect(result).toStrictEqual(2);
    });

    it('should find no supported string, from a complex line', async () => {
        const result = partOne(['abba[sibgoazaxuyfaaf]']);

        expect(result).toStrictEqual(0);
    });
});

describe('InternetProtocol:Part Two', () => {
    it('should find one supported string', async () => {
        const result = partTwo(['aba[bab]xyz']);

        expect(result).toStrictEqual(1);
    });

    it('should find no supported string', async () => {
        const result = partTwo(['xyx[xyx]xyx']);

        expect(result).toStrictEqual(0);
    });

    it('should find a supported string, with a more complex example', async () => {
        const result = partTwo(['aaa[kek]eke']);

        expect(result).toStrictEqual(1);
    });

    it('should find one supported string, with a more complex example', async () => {
        const result = partTwo(['zazbz[bzb]cdb[aaa]']);

        expect(result).toStrictEqual(1);
    });
});
