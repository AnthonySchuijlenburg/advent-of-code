import { getFileContent } from '../../helpers/ReadFromFile.ts';

export function partOne(ips: Array<string>): number {
    ips = ips.filter((ip) =>
        /^(?!.*\[[^\]]*([a-z])(?!\1)([a-z])\2\1[^\]]*]).*([a-z])(?!\3)([a-z])\4\3.*$/.test(
            ip,
        ),
    );

    return ips.length;
}

export function partTwo(ips: Array<string>): number {
    ips = ips.filter((ip) => {
        const outBound: Array<string> = ip
            .replace(/\[[^\]]*]/g, ' ')
            .split(' ');
        const inBound: Array<string> =
            ip.match(/\[([^\]]*)]/g)?.map((match) => match.slice(1, -1)) ?? [];

        const matches: Array<string> = [];

        for (const substring of outBound) {
            matches.push(
                ...Array.from(
                    substring.matchAll(/(?=([a-z])(?!\1)([a-z])\1)/g),
                    (m) => `${m[1]}${m[2]}${m[1]}`,
                ),
            );
        }

        for (const match of matches) {
            const inverseMatch = match[1] + match[0] + match[1];
            if (
                inBound.filter((subString) => subString.includes(inverseMatch))
                    .length > 0
            ) {
                return true;
            }
        }

        return false;
    });

    return ips.length;
}

function main() {
    const input: Array<string> = getFileContent('2016/07/input.txt')
        .trim()
        .split('\n')
        .filter((s) => !!s);

    const ipsThatHaveAbba = partOne(input);
    const ipsThatHaveAbaAndBab = partTwo(input);

    console.log(`The result of part one is: ${ipsThatHaveAbba}`);
    console.log(`The result of part two is: ${ipsThatHaveAbaAndBab}`);
}

if (process.env.NODE_ENV !== 'test') {
    // Only run the main function when not in testing,
    // to speed up pipelines
    main();
}
