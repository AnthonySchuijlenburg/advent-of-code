import { describe, it, expect } from 'vitest';
import {
    combineFirstAndLast,
    filterOutAlphabeticalCharacters,
    partOne,
    partTwo,
    replaceWordsWithNumbers,
} from './TrebucehtCalibration.js';

describe('TrebuchetCalibration:Filter Out Alphabetical Characters', () => {
    it('empty string', () => {
        const result = filterOutAlphabeticalCharacters('');
        expect(result).toBe('');
    });

    it('no numbers', () => {
        const result = filterOutAlphabeticalCharacters('abc');
        expect(result).toBe('');
    });

    it('one numbers', () => {
        const result = filterOutAlphabeticalCharacters('a1bc');
        expect(result).toBe('1');
    });

    it('multiple numbers', () => {
        const result = filterOutAlphabeticalCharacters('a1b2c3');
        expect(result).toBe('123');
    });
});

describe('TrebuchetCalibration:Combine First And Last', () => {
    it('no number', () => {
        const result = combineFirstAndLast('');
        expect(result).toBe(0);
    });

    it('one digit number', () => {
        const result = combineFirstAndLast('1');
        expect(result).toBe(11);
    });

    it('two digit number', () => {
        const result = combineFirstAndLast('12');
        expect(result).toBe(12);
    });

    it('three digit number', () => {
        const result = combineFirstAndLast('123');
        expect(result).toBe(13);
    });

    it('ten digit number', () => {
        const result = combineFirstAndLast('1234567890');
        expect(result).toBe(10);
    });
});

describe('TrebuchetCalibration:Replace Words With Numbers', () => {
    it('empty string', () => {
        const result = replaceWordsWithNumbers('');
        expect(result).toBe('');
    });

    it('no numbers', () => {
        const result = replaceWordsWithNumbers('abc');
        expect(result).toBe('abc');
    });

    it('one numbers', () => {
        const result = replaceWordsWithNumbers('a1bc');
        expect(result).toBe('a1bc');
    });

    it('multiple numbers', () => {
        const result = replaceWordsWithNumbers('a1b2c3');
        expect(result).toBe('a1b2c3');
    });

    it('one', () => {
        const result = replaceWordsWithNumbers('one');
        expect(result).toBe('o1e');
    });

    it('oneight', () => {
        const result = replaceWordsWithNumbers('oneight');
        expect(result).toBe('o1e8t');
    });
});

describe('TrebuchetCalibration:Part one', () => {
    it('example input', () => {
        const result = partOne('1abc2\npqr3stu8vwx\na1b2c3d4e5f\ntreb7uchet');
        expect(result).toBe(142);
    });
});

describe('TrebuchetCalibration:Part Two', () => {
    it('example input', () => {
        const result = partTwo(
            'two1nine\neightwothree\nabcone2threexyz\nxtwone3four\n4nineeightseven2\nzoneight234\n7pqrstsixteen',
        );
        expect(result).toBe(281);
    });
});
