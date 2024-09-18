import { getFileContent } from '../../helpers/ReadFromFile.ts';

export function partOne(instructions: Array<string>) {
    const registers: { [key: string]: number } = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
    };

    return runInstructions(instructions, registers);
}

export function partTwo(instructions: Array<string>) {
    const registers: { [key: string]: number } = {
        a: 0,
        b: 0,
        c: 1,
        d: 0,
    };

    return runInstructions(instructions, registers);
}

export function runInstructions(
    instructions: Array<string>,
    registers: { [key: string]: number },
) {
    for (let i = 0; i < instructions.length; i++) {
        const instruction = instructions[i].split(' ');

        if (instruction[0] === 'cpy') {
            if (isNaN(parseInt(instruction[1]))) {
                registers[instruction[2]] = registers[instruction[1]];
                continue;
            }

            registers[instruction[2]] = parseInt(instruction[1]);
            continue;
        }

        if (instruction[0] === 'inc') {
            registers[instruction[1]] += 1;
            continue;
        }

        if (instruction[0] === 'dec') {
            registers[instruction[1]] -= 1;
            continue;
        }

        if (registers[instruction[1]] !== 0) {
            i += parseInt(instruction[2]) - 1;
        }
    }

    return registers.a;
}

function main() {
    const input: Array<string> = getFileContent('2016/12/input.txt')
        .trim()
        .split('\n')
        .filter((s) => !!s);

    const valueInRegisterA = partOne(input);
    console.log(`The result of part one is: ${valueInRegisterA}`);

    const valueInRegisterAWithIgnitionOn = partTwo(input);
    console.log(`The result of part one is: ${valueInRegisterAWithIgnitionOn}`);
}

if (process.env.NODE_ENV !== 'test') {
    // Only run the main function when not in testing,
    // to speed up pipelines
    main();
}
