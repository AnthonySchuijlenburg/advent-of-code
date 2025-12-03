export function getAllSubsets<T>(array: T[], length: number) {
    return array
        .reduce<T[][]>(
            (subsets, value) => {
                const next = subsets
                    .map((s) => [value, ...s])
                    .filter((s) => s.length <= length);

                return subsets.concat(next);
            },
            [[]],
        )
        .filter((s) => s.length === length);
}
