import { getFileContent } from '../../helpers/ReadFromFile.ts';

export function partOne(input: string): number {
    const disk: string[] = [];

    for (const [index, char] of Object.entries(input.split(''))) {
        const file = Number(index) % 2 === 0;

        for (let i = 0; i < Number(char); i++) {
            disk.push(file ? '' + Math.floor(Number(index) / 2) : '.');
        }
    }

    let [l, r] = [0, disk.length - 1];

    while (l < r) {
        if (disk[l] !== '.') {
            l++;
            continue;
        }

        if (disk[r] === '.') {
            r--;
            continue;
        }

        [disk[l], disk[r]] = [disk[r], disk[l]];
    }

    return disk
        .filter((s) => s !== '.')
        .map((s) => Number(s))
        .map((s, i) => s * i)
        .reduce((acc, curr) => acc + curr);
}

export function partTwo(input: string): number {
    const disk: string[] = [];

    for (const [index, char] of Object.entries(input.split(''))) {
        const file = Number(index) % 2 === 0;
        let fileSize = '';

        for (let i = 0; i < Number(char); i++) {
            fileSize += file
                ? String.fromCharCode(65 + Math.floor(Number(index)) / 2)
                : '.';
        }

        if (fileSize.length > 0) {
            disk.push(fileSize);
        }
    }

    for (let i = disk.length - 1; i >= 0; i--) {
        const index = disk.findIndex((s) =>
            s.includes('.'.repeat(disk[i].length)),
        );

        if (index === -1 || index > i) {
            continue;
        }

        disk[index] = disk[index].replace('.'.repeat(disk[i].length), disk[i]);
        disk[i] = '.'.repeat(disk[i].length);
    }

    return disk
        .flatMap((s) => s.split(''))
        .map((s) => (s !== '.' ? Number(s.charCodeAt(0) - 65) : 0))
        .map((s, i) => s * i)
        .reduce((acc, curr) => acc + curr);
}

function main() {
    const input = getFileContent('2024/09/input.txt');

    const partOneResult = partOne(input.split('\n').filter((s) => !!s)[0]);
    const partTwoResult = partTwo(input.split('\n').filter((s) => !!s)[0]);

    console.log(`The result of part one is: ${partOneResult}`);
    console.log(`The result of part two is: ${partTwoResult}`);
}

if (process.env.NODE_ENV !== 'test') {
    // Only run the main function when not in testing,
    // to speed up pipelines
    main();
}
