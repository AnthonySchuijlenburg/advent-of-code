import { getFileContent } from '../../helpers/ReadFromFile.ts';

export function partOne(triangles: Array<string>): number {
    let possibleTriangles = 0;

    for (const triangle of triangles) {
        const sides: Array<number> = triangle
            .trim()
            .split(' ')
            .filter((s) => s !== '')
            .map((s) => parseInt(s));

        if (isTrianglePossible(sides[0], sides[1], sides[2])) {
            possibleTriangles++;
        }
    }

    return possibleTriangles;
}

export function partTwo(triangles: Array<string>): number {
    let possibleTriangles = 0;

    const organizedTriangles: Array<Array<number>> = [[], [], []];

    for (const triangle of triangles) {
        triangle
            .trim()
            .split(' ')
            .filter((s) => s !== '')
            .map((s) => parseInt(s))
            .forEach((side, index) => organizedTriangles[index].push(side));

        if (organizedTriangles[0].length < 3) {
            continue;
        }

        for (let i = 0; i < 3; i++) {
            const trianglePossible = isTrianglePossible(
                organizedTriangles[i][0],
                organizedTriangles[i][1],
                organizedTriangles[i][2],
            );

            if (trianglePossible) {
                possibleTriangles++;
            }

            organizedTriangles[i].length = 0;
        }
    }

    return possibleTriangles;
}

export function isTrianglePossible(a: number, b: number, c: number): boolean {
    return a + b > c && a + c > b && b + c > a;
}

function main() {
    const input: Array<string> = getFileContent('2016/03/input.txt')
        .split('\n')
        .filter((s) => s !== '');

    const possibleTriangles = partOne(input);
    const possibleVerticalTriangles = partTwo(input);

    console.log(`The result of part one is: ${possibleTriangles}`);
    console.log(`The result of part two is: ${possibleVerticalTriangles}`);
}

if (process.env.NODE_ENV !== 'test') {
    // Only run the main function when not in testing,
    // to speed up pipelines
    main();
}
