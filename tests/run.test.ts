import { expect, test } from 'vitest'
import { createRuns } from '../src/Run';

test ('it creates runs from a given orthogonalLength, orthogonalSpacing, length, and maxPieceLength', () => {
    const runs = [
        {
            offset: 6,
            pieces: [
                { start: 0, end: 60, length: 60 },
                { start: 40, end: 100, length: 60 },
                { start: 80, end: 120, length: 40 }
            ]
         },
         {
            offset: 30,
            pieces: [
                { start: 0, end: 60, length: 60 },
                { start: 40, end: 100, length: 60 },
                { start: 80, end: 120, length: 40 }
            ]
         },
         {
            offset: 54,
            pieces: [
                { start: 0, end: 60, length: 60 },
                { start: 40, end: 100, length: 60 },
                { start: 80, end: 120, length: 40 }
            ]
         }
    ];

    const params = {
        orthogonalLength: 60,
        orthogonalSpacing: 24,
        length: 120,
        maxPieceLength: 60
    };

    expect(createRuns(params)).toStrictEqual(runs);
});
