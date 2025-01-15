import { expect, test } from 'vitest'
import Run from '../src/run';

test ('it calculates pieces from a given length', () => {
    const testRun = [
        { start: 0, end: 240, length: 240 },
        { start: 220, end: 460, length: 240 },
        { start: 440, end: 480, length: 40 }
    ];

    expect(new Run(480).calculatePieces()).toStrictEqual(testRun);
});
