import { getFileContent } from '../../helpers/ReadFromFile.ts';
import { getAllSubsets } from '../../helpers/ArraySubsets.ts';

export function partOne(input: number[]): number {
    input = input.reverse();
    let subsetLength = 2;

    const QEs: number[] = [];
    while (subsetLength < input.length - 2) {
        const subsets = getAllSubsets(input, subsetLength);
        for (const subset of subsets) {
            const total = subset.reduce((a, b) => a + b, 0);
            const subsetDiff = input.filter((i) => !subset.includes(i));
            const diffTotal = subsetDiff.reduce((a, b) => a + b, 0);

            if (total !== diffTotal / 2) {
                continue;
            }

            if (isBalanceAble(subsetDiff, total)) {
                QEs.push(getQe(subset));
            }
        }

        if (QEs.length > 0) {
            break;
        }
        subsetLength++;
    }

    return Math.min(...QEs);
}

export function partTwo(input: number[]): number {
    input = input.reverse();
    let subsetLength = 2;

    const QEs: number[] = [];
    while (subsetLength < input.length - 2) {
        const subsets = getAllSubsets(input, subsetLength);
        for (const subset of subsets) {
            const total = subset.reduce((a, b) => a + b, 0);
            const subsetDiff = input.filter((i) => !subset.includes(i));
            const diffTotal = subsetDiff.reduce((a, b) => a + b, 0);

            if (total !== diffTotal / 3) {
                continue;
            }

            if (isBalanceAble(subsetDiff, total, true)) {
                QEs.push(getQe(subset));
            }
        }

        if (QEs.length > 0) {
            break;
        }
        subsetLength++;
    }

    return Math.min(...QEs);
}

function isBalanceAble(
    subset: number[],
    target: number,
    batchesOfTwo: boolean = true,
): boolean {
    for (let i = 1; i < subset.length; i++) {
        const newSubsets = getAllSubsets(subset, i);
        for (const newSubset of newSubsets) {
            const subsetTotal = newSubset.reduce((a, b) => a + b, 0);
            if (!batchesOfTwo) {
                // Wrote this just in case, but was not needed for my input
                const diffTotal = subset
                    .filter((i) => !newSubset.includes(i))
                    .reduce((a, b) => a + b, 0);

                if (target !== diffTotal / 2) {
                    continue;
                }
            }
            if (target !== subsetTotal) {
                continue;
            }

            return true;
        }
    }

    return false;
}

function getQe(subset: number[]) {
    return subset.reduce((a, b) => a * b, 1);
}

function main() {
    const input = getFileContent('2015/24/input.txt');

    // const partOneResult = partOne(input.split('\n').filter((s) => !!s).map(Number));
    const partTwoResult = partTwo(
        input
            .split('\n')
            .filter((s) => !!s)
            .map(Number),
    );

    // console.log(`The result of part one is: ${partOneResult}`);
    console.log(`The result of part two is: ${partTwoResult}`);
}

if (process.env.NODE_ENV !== 'test') {
    // Only run the main function when not in testing,
    // to speed up pipelines
    main();
}
