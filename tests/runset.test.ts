import { expect, test } from 'vitest'
import RunSet from '../src/runset';

test ('it calculates pieces from a given length, spacing, and run spec', () => {
    const testRunSet = [
        {
            offset: 6,
            run: [
                { start: 0, end: 60, length: 60 },
                { start: 40, end: 100, length: 60 },
                { start: 80, end: 120, length: 40 }
            ]
         },
         {
            offset: 30,
            run: [
                { start: 0, end: 60, length: 60 },
                { start: 40, end: 100, length: 60 },
                { start: 80, end: 120, length: 40 }
            ]
         },
         {
            offset: 54,
            run: [
                { start: 0, end: 60, length: 60 },
                { start: 40, end: 100, length: 60 },
                { start: 80, end: 120, length: 40 }
            ]
         }
    ];

    const runSpec = { length: 120, maxLength: 60 };

    expect(new RunSet(60, 24, runSpec).calculateRuns()).toStrictEqual(testRunSet);
});
