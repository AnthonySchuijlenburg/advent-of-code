import { describe, it, expect } from 'vitest';
import { partOne, rect, rotateColumn, rotateRow } from './TwoFactor.ts';

describe('TwoFactor:Part One', () => {
    it('should draw a 1x1 rectangle', async () => {
        const result = partOne(['rect 1x1']);

        expect(result).toStrictEqual(1);
    });

    it('should draw a 3x2 rectangle', async () => {
        const result = partOne(['rect 3x2']);

        expect(result).toStrictEqual(6);
    });
});

describe('TwoFactor:Rect', () => {
    it('should draw a 1x1 rectangle', async () => {
        const result = rect([[false]], 1, 1);

        expect(result).toStrictEqual([[true]]);
    });

    it('should draw a 1x1 rectangle on a bigger grid', async () => {
        const result = rect(
            [
                [false, false, false],
                [false, false, false],
                [false, false, false],
            ],
            1,
            1,
        );

        expect(result).toStrictEqual([
            [true, false, false],
            [false, false, false],
            [false, false, false],
        ]);
    });

    it('should draw a 2x2 rectangle', async () => {
        const result = rect(
            [
                [false, false, false],
                [false, false, false],
                [false, false, false],
            ],
            2,
            2,
        );

        expect(result).toStrictEqual([
            [true, true, false],
            [true, true, false],
            [false, false, false],
        ]);
    });
});

describe('TwoFactor:Rotate Row', () => {
    it('should move a row by one', async () => {
        const result = rotateRow([[true, false, false]], 0, 1);

        expect(result).toStrictEqual([[false, true, false]]);
    });

    it('should move a over row and overflow to the other side', async () => {
        const result = rotateRow([[true, false, false]], 0, 4);

        expect(result).toStrictEqual([[false, true, false]]);
    });

    it('should move a over multiple items in a row and overflow to the other side', async () => {
        const result = rotateRow([[true, true, false]], 0, 2);

        expect(result).toStrictEqual([[true, false, true]]);
    });
});

describe('TwoFactor:Rotate Column', () => {
    it('should move a column by one', async () => {
        const result = rotateColumn([[true], [false], [false]], 0, 1);

        expect(result).toStrictEqual([[false], [true], [false]]);
    });

    it('should move a column by one and overflow to the other side', async () => {
        const result = rotateColumn([[true], [false], [false]], 0, 4);

        expect(result).toStrictEqual([[false], [true], [false]]);
    });

    it('should move a over multiple items in a column and overflow to the other side', async () => {
        const result = rotateColumn([[true], [true], [false]], 0, 2);

        expect(result).toStrictEqual([[true], [false], [true]]);
    });

    it('should move a column by one, with multiple columns', async () => {
        const result = rotateColumn(
            [
                [true, false],
                [false, false],
                [false, false],
            ],
            0,
            1,
        );

        expect(result).toStrictEqual([
            [false, false],
            [true, false],
            [false, false],
        ]);
    });
});
