import { getFileContent } from '../../helpers/ReadFromFile.ts';

export interface Room {
    encryptedName: string;
    sectorId: number;
    checksum: string;
}

export function partOne(rooms: Array<string>): number {
    let sumOfSectors = 0;

    for (const roomString of rooms) {
        const room = formatRoom(roomString);
        if (isRoomReal(room)) {
            sumOfSectors += room.sectorId;
        }
    }

    return sumOfSectors;
}

export function partTwo(rooms: Array<string>): number {
    for (const roomString of rooms) {
        const room = formatRoom(roomString);
        const result = decodeShiftCipher(room.sectorId, room.encryptedName);

        if (result.includes('northpole')) {
            return room.sectorId;
        }
    }

    return 0;
}

export function formatRoom(roomString: string): Room {
    return {
        encryptedName: roomString
            .substring(0, roomString.lastIndexOf('-'))
            .replace(/[^a-z-]/g, ''),
        sectorId: parseInt(roomString.replace(/[^0-9]/g, '')),
        checksum: roomString
            .trim()
            .substring(
                roomString.indexOf('[') + 1,
                roomString.indexOf('[') + 6,
            ),
    };
}

export function isRoomReal(room: Room): boolean {
    const letterFrequency: { [key: string]: number } = {};

    for (const roomLetter of room.encryptedName.split('')) {
        letterFrequency[roomLetter] = 1 + (letterFrequency[roomLetter] ?? 0);
    }

    const sortedFrequencies = Object.entries(letterFrequency)
        .filter((s) => s[0] !== '-')
        .sort((a, b) => {
            if (b[1] === a[1]) {
                return a[0].localeCompare(b[0]);
            }
            return b[1] - a[1];
        })
        .map((l) => l[0])
        .slice(0, 5);

    for (const check of room.checksum.split('')) {
        if (!sortedFrequencies.includes(check)) {
            return false;
        }
    }

    return true;
}

export function decodeShiftCipher(
    rounds: number,
    encryptedKey: string,
): string {
    rounds = rounds % 26;
    const originalAlphabet = 'abcdefghijklmnopqrstuvwxyz';

    const shiftedAlphabet =
        originalAlphabet.substring(rounds) +
        originalAlphabet.substring(0, rounds);

    let decryptedKey = '';

    for (let i = 0; i < encryptedKey.length; i++) {
        if (encryptedKey[i] === '-') {
            decryptedKey += ' ';
            continue;
        }

        const index = originalAlphabet.indexOf(encryptedKey[i]);
        decryptedKey += shiftedAlphabet[index];
    }

    return decryptedKey;
}

function main() {
    const input: Array<string> = getFileContent('2016/04/input.txt')
        .split('\n')
        .filter((s) => s !== '');

    const sumOfRealSectors = partOne(input);
    const northPoleObjectsRoom = partTwo(input);

    console.log(`The result of part one is: ${sumOfRealSectors}`);
    console.log(`The result of part two is: ${northPoleObjectsRoom}`);
}

if (process.env.NODE_ENV !== 'test') {
    // Only run the main function when not in testing,
    // to speed up pipelines
    main();
}
