import { getFileContent } from '../../helpers/ReadFromFile.ts';

export function partOne(input: string[]): number {
    let total = 0;
    for (const line of input) {
        const bank = line.split('');
        let largestNumber = 0;

        for (let i = 0; i < bank.length; i++) {
            for (let j = i + 1; j < bank.length; j++) {
                largestNumber = Math.max(
                    Number(bank[i] + bank[j]),
                    largestNumber,
                );
            }
        }

        total += largestNumber;
    }

    return total;
}

export function partTwo(input: string[]): number {
    let result = 0;
    for (const line of input) {
        let bank = '';
        let startIndex = 0;
        let spotsLeft = 12;

        while (bank.length < 12) {
            const { highest, index } = getHighestNumberRemainingInLine(
                line,
                startIndex,
                spotsLeft,
            );
            bank += highest.toString();
            startIndex = index + 1;
            spotsLeft = spotsLeft - 1;
        }

        result += Number(bank);
    }

    return result;
}

function getHighestNumberRemainingInLine(
    line: string,
    startIndex: number,
    spotsLeft: number,
) {
    let highest = 0;
    let index = 0;

    for (let i = startIndex; i <= line.length - spotsLeft; i++) {
        const num = Number(line[i]);

        if (num > highest) {
            highest = num;
            index = i;
        }
    }

    return { highest, index };
}

function main() {
    const input = getFileContent('2025/03/input.txt');

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
