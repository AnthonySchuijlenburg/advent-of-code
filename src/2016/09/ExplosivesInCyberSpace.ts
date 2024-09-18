import { getFileContent } from '../../helpers/ReadFromFile.ts';

export function partOne(input: string): number {
    return decompress(input);
}

export function partTwo(input: string): number {
    return decompress(input, decompress);
}

export function decompress(
    input: string,
    recursiveFunction: typeof decompress = (x) => x.length,
): number {
    let decompressedLength = 0;

    while (input.length > 0) {
        if (input[0] === '(') {
            const match = /^\((\d+)x(\d+)\)(.*)$/.exec(input);

            if (!match || !match[1] || !match[2] || !match[3]) {
                throw new Error('invalid input: ' + input);
            }
            const subLength = recursiveFunction(
                match[3].substring(0, parseInt(match[1])),
                recursiveFunction,
            );

            decompressedLength += subLength * parseInt(match[2]);
            input = match[3].substring(parseInt(match[1]));
        } else {
            decompressedLength += 1;
            input = input.substring(1);
        }
    }

    return decompressedLength;
}

function main() {
    const input: string = getFileContent('2016/09/input.txt').trim();

    const decompressedOnceLength = partOne(input);
    console.log(`The result of part one is: ${decompressedOnceLength}`);

    const decompressedLength = partTwo(input);
    console.log(`The result of part two is: ${decompressedLength}`);
}

if (process.env.NODE_ENV !== 'test') {
    // Only run the main function when not in testing,
    // to speed up pipelines
    main();
}
