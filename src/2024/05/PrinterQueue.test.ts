import { describe, it, expect } from 'vitest';
import { partOne, partTwo } from './PrinterQueue.js';

describe('PrinterQueue:Part one', () => {
    it('example input 1', () => {
        const result = partOne(['47|53\n97|13', '75,97,47,61,53']);
        expect(result).toBe(47);
    });

    it('example input 2', () => {
        const result = partOne([
            '47|53\n97|13\n97|61\n97|47\n75|29\n61|13\n75|53\n29|13\n97|29\n53|29\n61|53\n97|53\n61|29\n47|13\n75|47\n97|75\n47|61\n75|61\n47|29\n75|13\n53|13',
            '75,47,61,53,29\n97,61,53,29,13\n75,29,13\n75,97,47,61,53\n61,13,29\n97,13,75,29,47',
        ]);
        expect(result).toBe(143);
    });
});

describe('PrinterQueue:Part Two', () => {
    it('example input 1', () => {
        const result = partTwo([
            '47|53\n97|13\n97|61\n97|47\n75|29\n61|13\n75|53\n29|13\n97|29\n53|29\n61|53\n97|53\n61|29\n47|13\n75|47\n97|75\n47|61\n75|61\n47|29\n75|13\n53|13',
            '75,47,61,53,29\n97,61,53,29,13\n75,29,13\n75,97,47,61,53\n61,13,29\n97,13,75,29,47',
        ]);
        expect(result).toBe(123);
    });
});
