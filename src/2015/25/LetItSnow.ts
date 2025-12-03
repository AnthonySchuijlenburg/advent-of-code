import { getFileContent } from '../../helpers/ReadFromFile.ts';

const grid = [[20151125, 31916031], [18749137]];

export function partOne(input: number[]): number {
    const [row, col] = input;

    while (grid.length < col) {
        setNextDiagonal();
    }

    while (grid[col - 1].length < row) {
        setNextDiagonal();
    }

    return grid[col - 1][row - 1];
}

function setNextDiagonal(): void {
    grid.push([]);
    let currentCol = 0;
    let currentRow = grid[0].length;

    // Loop over all columns
    for (let i = 0; i < grid.length; i++) {
        if (currentCol === 0) {
            // Look at last
            grid[currentCol][currentRow] = getNextCode(
                grid[grid.length - 2][0],
            );

            currentCol++;
            currentRow--;
            continue;
        }

        grid[currentCol][currentRow] = getNextCode(
            grid[currentCol - 1][currentRow + 1],
        );
        currentCol++;
        currentRow--;
    }
}

function getNextCode(code: number): number {
    return (code * 252533) % 33554393;
}

function main() {
    const input = getFileContent('2015/25/input.txt')
        .replace(
            'To continue, please consult the code grid in the manual.  Enter the code at row ',
            '',
        )
        .replace('.', '')
        .split(', column ')
        .map(Number);

    const partOneResult = partOne(input);

    console.log(`The result of part one is: ${partOneResult}`);
}

if (process.env.NODE_ENV !== 'test') {
    // Only run the main function when not in testing,
    // to speed up pipelines
    main();
}
