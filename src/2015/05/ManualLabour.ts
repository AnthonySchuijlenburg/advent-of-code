import { getFileContent } from '../../helpers/ReadFromFile.ts';

export function partOne(input: string[]): number {
    return input.filter((s) => isNiceString(s)).length;
}

export function partTwo(input: string[]): number {
    return input.filter((s) => hasDoublePair(s) && hasRepeatingLetter(s))
        .length;
}

function isNiceString(testString: string): boolean {
    const vowelRegex = /(?:[aeiou].*){3}/i;
    if (!vowelRegex.test(testString)) {
        return false;
    }

    const duplicateRegex = /(.)\1+/;
    if (!duplicateRegex.test(testString)) {
        return false;
    }

    const illegalStringRegex = /ab|cd|pq|xy/;
    return !illegalStringRegex.test(testString);
}

function hasDoublePair(testString: string): boolean {
    for (let i = 0; i < testString.length - 1; i++) {
        const double = testString[i] + testString[i + 1];
        if (testString.replace(double, '--').includes(double)) {
            return true;
        }
    }

    return false;
}

function hasRepeatingLetter(testString: string): boolean {
    for (let i = 0; i < testString.length - 2; i++) {
        if (testString[i] === testString[i + 2]) {
            return true;
        }
    }

    return false;
}

function main() {
    const input: string = getFileContent('2015/05/input.txt');

    const partOneResult = partOne(input.split('\n').filter((s) => !!s));
    const partTwoResult = partTwo(input.split('\n').filter((s) => !!s));

    console.log(`The result of part one is: ${partOneResult}`);
    console.log(`The result of part two is: ${partTwoResult}`);
}

if (process.env.NODE_ENV !== 'test') {
    // Only run the main function when not in testing,
    // to speed up pipelines
    main();
}
