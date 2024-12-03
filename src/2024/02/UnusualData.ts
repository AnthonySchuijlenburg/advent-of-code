import { getFileContent } from '../../helpers/ReadFromFile.ts';

export function partOne(input: string[]): number {
    const reports = input.map((r) => isReportSafe(r)).filter((r) => r);

    return reports.length;
}

export function partTwo(input: string[]): number {
    const reports = input.map((r) => isReportSafe(r, true)).filter((r) => r);

    return reports.length;
}

function isReportSafe(report: string, retry: boolean = false): boolean {
    const levels = report.split(' ').map((l) => Number(l));
    const asc = levels[0] < levels[1];

    for (let i = 0; i < levels.length - 1; i++) {
        if (
            (asc && levels[i] >= levels[i + 1]) ||
            (!asc && levels[i] <= levels[i + 1])
        ) {
            return (
                retry &&
                getRetryReports(levels, i)
                    .map((r) => isReportSafe(r))
                    .filter((b) => b).length > 0
            );
        }

        if (Math.abs(levels[i] - levels[i + 1]) > 3) {
            return (
                retry &&
                getRetryReports(levels, i)
                    .map((r) => isReportSafe(r))
                    .filter((b) => b).length > 0
            );
        }
    }

    return true;
}

function getRetryReports(levels: number[], i: number): string[] {
    return [i + 1, i, i - 1].map((index) =>
        levels.filter((_, j) => index !== j).join(' '),
    );
}

function main() {
    const input = getFileContent('2024/02/input.txt');

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
