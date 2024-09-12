import { getFileContent } from '../../helpers/ReadFromFile.ts';

interface FrequencyMap {
    [key: string]: number;
}

export function partOne(scrambledMessages: Array<string>): string {
    const frequencies = findLetterFrequency(scrambledMessages);

    return findOriginalMessage(frequencies, (a, b) => b[1] - a[1]);
}

export function partTwo(scrambledMessages: Array<string>): string {
    const frequencies = findLetterFrequency(scrambledMessages);

    return findOriginalMessage(frequencies, (a, b) => a[1] - b[1]);
}

export function findLetterFrequency(
    scrambledMessages: Array<string>,
): Array<FrequencyMap> {
    const frequencies: Array<FrequencyMap> = [];

    for (let i = 0; i < scrambledMessages[0].length; i++) {
        frequencies.push({});

        for (const scrambledMessage of scrambledMessages) {
            if (frequencies[i][scrambledMessage[i]]) {
                frequencies[i][scrambledMessage[i]] += 1;
                continue;
            }

            frequencies[i][scrambledMessage[i]] = 1;
        }
    }

    return frequencies;
}

export function findOriginalMessage(
    frequencies: Array<FrequencyMap>,
    sortFunction: (a: [string, number], b: [string, number]) => number,
) {
    let originalMessage = '';

    for (const frequency of frequencies) {
        const sortedFrequencies = Object.entries(frequency)
            .sort(sortFunction)
            .map((l) => l[0])
            .slice(0, 1);

        originalMessage += sortedFrequencies[0];
    }

    return originalMessage;
}

function main() {
    const input: Array<string> = getFileContent('2016/06/input.txt')
        .trim()
        .split('\n')
        .filter((s) => !!s);

    const correctedMessage = partOne(input);
    const correctedMessageLessLikely = partTwo(input);

    console.log(`The result of part one is: ${correctedMessage}`);
    console.log(`The result of part two is: ${correctedMessageLessLikely}`);
}

if (process.env.NODE_ENV !== 'test') {
    // Only run the main function when not in testing,
    // to speed up pipelines
    main();
}
