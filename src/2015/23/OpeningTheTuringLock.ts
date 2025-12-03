import { getFileContent } from '../../helpers/ReadFromFile.ts';

interface Computer {
    a: number;
    b: number;
    jump: number;
}

export function partOne(input: string[]): number {
    const computer: Computer = { a: 0, b: 0, jump: 0 };
    return handleProgram(input, computer);
}

export function partTwo(input: string[]): number {
    const computer: Computer = { a: 1, b: 0, jump: 0 };
    return handleProgram(input, computer);
}

function handleProgram(input: string[], computer: Computer): number {
    for (let i = 0; i < input.length; i++) {
        computer = handleLine(input[i], computer);

        if (computer.jump !== 0) {
            i += computer.jump - 1;
            computer.jump = 0;
        }
    }

    return computer.b;
}

function handleLine(line: string, computer: Computer): Computer {
    if (line.startsWith('hlf ')) {
        const register = line.replace('hlf ', '') as 'a' | 'b';
        computer[register] = Math.round(computer[register] / 2);
        return computer;
    }

    if (line.startsWith('tpl ')) {
        const register = line.replace('tpl ', '') as 'a' | 'b';
        computer[register] = computer[register] * 3;
        return computer;
    }

    if (line.startsWith('inc ')) {
        const register = line.replace('inc ', '') as 'a' | 'b';
        computer[register] += 1;
        return computer;
    }

    if (line.startsWith('jmp ')) {
        computer.jump = Number(line.replace('jmp ', ''));
        return computer;
    }

    if (line.startsWith('jie ')) {
        const lines = line.split(', ');
        const register = lines[0].replace('jie ', '') as 'a' | 'b';

        if (computer[register] % 2 === 0) {
            computer.jump = Number(lines[1]);
        }
        return computer;
    }

    if (line.startsWith('jio ')) {
        const lines = line.split(', ');
        const register = lines[0].replace('jio ', '') as 'a' | 'b';

        if (computer[register] === 1) {
            computer.jump = Number(lines[1]);
        }
        return computer;
    }

    return computer;
}

function main() {
    const input = getFileContent('2015/23/input.txt');

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
