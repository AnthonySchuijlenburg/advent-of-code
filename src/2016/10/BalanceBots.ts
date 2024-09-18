import { getFileContent } from '../../helpers/ReadFromFile.ts';

interface Bots {
    [key: number]: Bot;
}

interface Output {
    [key: number]: number;
}

interface Instruction {
    lowTo: number;
    lowToBot: boolean;
    highTo: number;
    highToBot: boolean;
}

class Bot {
    id: number;
    instruction: Instruction;
    low?: number;
    high?: number;

    constructor(id: number, instruction: Instruction) {
        this.id = id;
        this.instruction = instruction;
    }

    addChip(chip: number): void | number {
        const values: Array<number> = [this.low, this.high, chip].filter(
            (v) => v !== undefined,
        );

        this.low = Math.min(...values);
        this.high = Math.max(...values);

        if (this.low !== this.high) {
            if (this.low === 17 && this.high === 61) {
                console.log(`The result of part one is: ${this.id}`);
            }

            this.doInstruction();
        }
    }

    doInstruction(): void | number {
        if (!this.low || !this.high) {
            throw new Error('stuk');
        }

        if (this.instruction.lowToBot) {
            bots[this.instruction.lowTo].addChip(this.low);
        } else {
            output[this.instruction.lowTo] = this.low;
        }
        this.low = undefined;

        if (this.instruction.highToBot) {
            bots[this.instruction.highTo].addChip(this.high);
        } else {
            output[this.instruction.highTo] = this.high;
        }
        this.high = undefined;
    }
}

let bots: Bots = {};
let output: Output = {};

export function partOne(input: Array<string>) {
    handleBotInstructions(input);
}

export function partTwo(input: Array<string>) {
    handleBotInstructions(input);
    return output[0] * output[1] * output[2];
}

function handleBotInstructions(input: Array<string>) {
    bots = {};
    output = {};

    const instructions = input.filter((s) => s.startsWith('bot '));
    const values = input.filter((s) => s.startsWith('value '));

    for (const instruction of instructions) {
        const splitInstruction = instruction.split(' ');
        const botNum = parseInt(splitInstruction[1]);

        bots[botNum] = new Bot(botNum, {
            lowToBot: splitInstruction[5] === 'bot',
            lowTo: parseInt(splitInstruction[6]),
            highToBot: splitInstruction[10] === 'bot',
            highTo: parseInt(splitInstruction[11]),
        });
    }

    for (const value of values) {
        const splitInstruction = value.split(' ');
        const botNum = parseInt(splitInstruction[5]);
        bots[botNum].addChip(parseInt(splitInstruction[1]));
    }
}

function main() {
    const input: Array<string> = getFileContent('2016/10/input.txt')
        .trim()
        .split('\n')
        .filter((s) => !!s);

    partOne(input);

    const productOfFirstThreeOutputs = partTwo(input);
    console.log(`The result of part two is: ${productOfFirstThreeOutputs}`);
}

if (process.env.NODE_ENV !== 'test') {
    // Only run the main function when not in testing,
    // to speed up pipelines
    main();
}
