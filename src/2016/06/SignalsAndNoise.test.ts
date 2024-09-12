import { describe, it, expect } from 'vitest';
import {
    findLetterFrequency,
    findOriginalMessage,
    partOne,
    partTwo,
} from './SignalsAndNoise.js';

describe('SignalsAndNoise:Part One', () => {
    it('should find the most common substring', async () => {
        const result = partOne([
            'eedadn',
            'drvtee',
            'eandsr',
            'raavrd',
            'atevrs',
            'tsrnev',
            'sdttsa',
            'rasrtv',
            'nssdts',
            'ntnada',
            'svetve',
            'tesnvt',
            'vntsnd',
            'vrdear',
            'dvrsen',
            'enarar',
        ]);

        expect(result).toStrictEqual('easter');
    });
});

describe('SignalsAndNoise:Part Two', () => {
    it('should find the least common substring', async () => {
        const result = partTwo([
            'eedadn',
            'drvtee',
            'eandsr',
            'raavrd',
            'atevrs',
            'tsrnev',
            'sdttsa',
            'rasrtv',
            'nssdts',
            'ntnada',
            'svetve',
            'tesnvt',
            'vntsnd',
            'vrdear',
            'dvrsen',
            'enarar',
        ]);

        expect(result).toStrictEqual('advent');
    });
});

describe('SignalsAndNoise:Find Letter Frequency', () => {
    it('should count letter frequencies', async () => {
        const result = findLetterFrequency(['abc', 'abc']);

        expect(result).toStrictEqual([{ a: 2 }, { b: 2 }, { c: 2 }]);
    });

    it('should count letter frequencies', async () => {
        const result = findLetterFrequency(['abc', 'cba']);

        expect(result).toStrictEqual([
            { a: 1, c: 1 },
            { b: 2 },
            { a: 1, c: 1 },
        ]);
    });
});

describe('SignalsAndNoise:Find Original Message', () => {
    it('should recreate the message from a simple frequency map', async () => {
        const result = findOriginalMessage(
            [{ a: 2 }, { b: 2 }, { c: 2 }],
            (a, b) => b[1] - a[1],
        );

        expect(result).toStrictEqual('abc');
    });

    it('should recreate the message from a frequency map with a most common sort function', async () => {
        const result = findOriginalMessage(
            [{ a: 1, c: 2 }, { b: 2 }, { a: 1, c: 2 }],
            (a, b) => b[1] - a[1],
        );

        expect(result).toStrictEqual('cbc');
    });

    it('should recreate the message from a frequency map with a least common sort function', async () => {
        const result = findOriginalMessage(
            [{ a: 1, c: 2 }, { b: 2 }, { a: 1, c: 2 }],
            (a, b) => a[1] - b[1],
        );

        expect(result).toStrictEqual('aba');
    });
});
