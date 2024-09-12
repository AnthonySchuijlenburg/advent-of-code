import { getFileContent } from '../../helpers/ReadFromFile.ts';
import { Md5 } from 'ts-md5';

export function partOne(hashedPassword: string): string {
    let password = '';
    let increment = 0;
    for (let i = 0; i < 8; i++) {
        const result = findNextInterestingHash(
            hashedPassword,
            '00000',
            increment,
        );
        password += result.nextChar;
        increment = result.inc;
    }

    return password;
}

export function partTwo(hashedPassword: string): string {
    const password: Array<string> = [];
    const passwordLength = 8;
    password.length = passwordLength;

    let increment = 0;
    while (password.filter((l) => !!l).length < passwordLength) {
        const result = findNextInterestingHash(
            hashedPassword,
            '00000',
            increment,
        );

        if (
            parseInt(result.nextChar) >= 0 &&
            parseInt(result.nextChar) < passwordLength &&
            !password[parseInt(result.nextChar)]
        ) {
            password[parseInt(result.nextChar)] = result.secondChar;
        }
        increment = result.inc;
    }

    return password.join('');
}

export function findNextInterestingHash(
    key: string,
    interestingString: string,
    inc: number = -1,
): { nextChar: string; secondChar: string; inc: number } {
    let hash = '';

    while (!hash.startsWith(interestingString)) {
        inc++;
        hash = Md5.hashStr(key + inc);
    }

    return {
        nextChar: hash[interestingString.length],
        secondChar: hash[interestingString.length + 1],
        inc: inc,
    };
}

function main() {
    const input: string = getFileContent('2016/05/input.txt').trim();

    const password = partOne(input);
    const harderPassword = partTwo(input);

    console.log(`The result of part one is: ${password}`);
    console.log(`The result of part two is: ${harderPassword}`);
}

if (process.env.NODE_ENV !== 'test') {
    // Only run the main function when not in testing,
    // to speed up pipelines
    main();
}
