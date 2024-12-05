export function getPermutations<T>(array: T[]): T[][] {
    if (array.length === 0) {
        return [[]];
    }
    const result: T[][] = [];

    array.forEach((element, index) => {
        const rest = [...array.slice(0, index), ...array.slice(index + 1)];
        const permutationsOfRest = getPermutations(rest);
        permutationsOfRest.forEach((permutation) => {
            result.push([element, ...permutation]);
        });
    });

    return result;
}
