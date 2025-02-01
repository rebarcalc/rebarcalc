import { expect, test } from 'vitest'
import Mat from '../src/mat';

test ('it calculates run sets from a given mat spec', () => {

    const testMat = {
        xRunSet: [
            {
                offset: 0,
                run: [{ start: 0, end: 60, length: 60 }]
            },
            {
                offset: 24,
                run: [{ start: 0, end: 60, length: 60 }]
            },
            {
                offset: 48,
                run: [{ start: 0, end: 60, length: 60 }]
            },
            {
                offset: 72,
                run: [{ start: 0, end: 60, length: 60 }]
            },
            {
                offset: 96,
                run: [{ start: 0, end: 60, length: 60 }]
            },
            {
                offset: 120,
                run: [{ start: 0, end: 60, length: 60 }]
            }
        ],
        yRunSet: [
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
        ],
    };

    const matSpec = { xLength: 60, yLength: 120, xSpacing: 24, ySpacing: 24, maxLength: 60 };

    expect(new Mat(matSpec).calculateRunSets()).toStrictEqual(testMat);
});
