import { getFileContent } from '../../helpers/ReadFromFile.ts';
import { Md5 } from 'ts-md5';

export function partOne(input: string): number {
    let suffix = 0;
    let result: string = '';

    while (!result.startsWith('00000')) {
        result = Md5.hashStr(`${input}${suffix++}`);
    }

    return suffix - 1;
}

export function partTwo(input: string): number {
    let suffix = 0;
    let result: string = '';

    while (!result.startsWith('000000')) {
        result = Md5.hashStr(`${input}${suffix++}`);
    }

    return suffix - 1;
}

function main() {
    const input: string = getFileContent('2015/04/input.txt');

    const partOneResult = partOne(input.trim());
    const partTwoResult = partTwo(input.trim());

    console.log(`The result of part one is: ${partOneResult}`);
    console.log(`The result of part two is: ${partTwoResult}`);
}

if (process.env.NODE_ENV !== 'test') {
    // Only run the main function when not in testing,
    // to speed up pipelines
    main();
}
