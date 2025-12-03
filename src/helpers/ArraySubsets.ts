export function getAllSubsets(array: string[], maxLength: number) {
    return array.reduce<string[][]>(
        (subsets, value) => {
            const next = subsets
                .map((s) => [value, ...s])
                .filter((s) => s.length <= maxLength);

            return subsets.concat(next);
        },
        [[]],
    );
}
