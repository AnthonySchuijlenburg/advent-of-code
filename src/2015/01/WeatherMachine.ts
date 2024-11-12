import { getFileContent } from '../../helpers/ReadFromFile.ts';

export function partOne(directions: string): number {
    const steps = directions.split('');
    let floor = 0;

    for (const step of steps) {
        if (step === '(') {
            floor++;
        } else {
            floor--;
        }
    }

    return floor;
}

export function partTwo(directions: string): number {
    const steps = directions.split('');
    let floor = 0;

    for (const [index, step] of steps.entries()) {
        if (step === '(') {
            floor++;
        } else {
            floor--;
        }

        if (floor === -1) {
            return index + 1;
        }
    }

    return floor;
}

function main() {
    const input: string = getFileContent('2015/01/input.txt');

    const distancePartOne = partOne(input.trim());
    const distancePartTwo = partTwo(input.trim());

    console.log(`The result of part one is: ${distancePartOne}`);
    console.log(`The result of part two is: ${distancePartTwo}`);
}

if (process.env.NODE_ENV !== 'test') {
    // Only run the main function when not in testing,
    // to speed up pipelines
    main();
}
