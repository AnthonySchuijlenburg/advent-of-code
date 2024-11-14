import { getFileContent } from '../../helpers/ReadFromFile.ts';

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

export function partOne(input: string): string {
    while (!isValidPassword(input)) {
        input = increasePassword(input);
    }

    return input;
}

export function partTwo(input: string): string {
    return partOne(increasePassword(partOne(input)));
}

export function isValidPassword(password: string): boolean {
    if (/[iol]/.test(password)) {
        return false;
    }

    if (/(.)\1+/.test(password)) {
        const matches = new Set(
            [...password.matchAll(/(.)\1+/g)].map((match) => match[0]),
        );
        if (matches.size < 2) {
            return false;
        }
    } else {
        return false;
    }

    for (let i = 0; i < alphabet.length - 2; i++) {
        const substr = alphabet.substring(i, i + 3);
        if (password.includes(substr)) {
            return true;
        }
    }

    return false;
}

export function increasePassword(password: string): string {
    const newPassword = password.split('').reverse();

    for (let i = 0; i < password.length; i++) {
        if (newPassword[i] !== 'z') {
            newPassword[i] = alphabet[alphabet.indexOf(newPassword[i]) + 1];

            return newPassword.reverse().join('');
        }

        newPassword[i] = 'a';
    }

    return 'a' + newPassword.reverse().join('');
}

function main() {
    const input: string = getFileContent('2015/11/input.txt');

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
