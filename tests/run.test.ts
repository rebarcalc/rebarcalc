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

test ('it calculates pieces with optional parameters', () => {
    const testRun = [
        { start: 0, end: 120, length: 120 },
        { start: 97.5, end: 217.5, length: 120 },
        { start: 195, end: 315, length: 120 },
        { start: 292.5, end: 412.5, length: 120 },
        { start: 390, end: 480, length: 90 },
    ];

    expect(new Run(480, 0.375, 120, 60).calculatePieces()).toStrictEqual(testRun);
});

test ('it throws if maxLength is equal to or less than lap length', () => {
    expect(() => new Run(40, 0.5, 20).calculatePieces()).toThrowError(
        /^maxLength must be greater than lap.$/, 
    );

    expect(() => new Run(20, 0.5, 15).calculatePieces()).toThrowError(
        /^maxLength must be greater than lap.$/, 
    );
});