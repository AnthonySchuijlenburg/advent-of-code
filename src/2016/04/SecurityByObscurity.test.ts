import { describe, it, expect } from 'vitest';
import {
    decodeShiftCipher,
    formatRoom,
    isRoomReal,
} from './SecurityByObscurity.ts';

describe('SecurityByObscurity:Format Room', () => {
    it('should return a simple formatted room', () => {
        const result = formatRoom('abcde-123[abcde]');

        expect(result.encryptedName).toBe('abcde');
        expect(result.sectorId).toBe(123);
        expect(result.checksum).toBe('abcde');
    });

    it('should return a formatted room', () => {
        const result = formatRoom('aaaaa-bbb-z-y-x-123[abxyz]');

        expect(result.encryptedName).toBe('aaaaa-bbb-z-y-x');
        expect(result.sectorId).toBe(123);
        expect(result.checksum).toBe('abxyz');
    });
});

describe('SecurityByObscurity:Is Room Real', () => {
    it('should return true on a simple valid room', () => {
        const result = isRoomReal({
            encryptedName: 'aaabbcdfe',
            sectorId: 123,
            checksum: 'abcde',
        });

        expect(result).toBe(true);
    });

    it('should return false on a simple invalid room', () => {
        const result = isRoomReal({
            encryptedName: 'aaabbcdfe',
            sectorId: 123,
            checksum: 'vwxyz',
        });

        expect(result).toBe(false);
    });

    it('should return false on an invalid room', () => {
        const result = isRoomReal({
            encryptedName: 'aaabbcdfe',
            sectorId: 123,
            checksum: 'abcdf',
        });

        expect(result).toBe(false);
    });

    it('should return false on a complex invalid room', () => {
        const result = isRoomReal({
            encryptedName: 'a-a-a-b-b-c-d-f-e',
            sectorId: 123,
            checksum: 'abcde',
        });

        expect(result).toBe(true);
    });
});

describe('SecurityByObscurity:Decode Shift Cipher', () => {
    it('decode a simple string', () => {
        const result = decodeShiftCipher(1, 'a');

        expect(result).toBe('b');
    });

    it('decode a simple string', () => {
        const result = decodeShiftCipher(27, 'a');

        expect(result).toBe('b');
    });

    it('decode a simple string', () => {
        const result = decodeShiftCipher(1, 'a-a');

        expect(result).toBe('b b');
    });

    it('decode a simple string', () => {
        const result = decodeShiftCipher(343, 'qzmt-zixmtkozy-ivhz');

        expect(result).toBe('very encrypted name');
    });
});
