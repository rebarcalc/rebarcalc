import { expect, test } from 'vitest'
import { createPieces } from '../src/Piece';

test ('it creates pieces from a given length', () => {
    const pieces = [
        { start: 0, end: 240, length: 240 },
        { start: 220, end: 460, length: 240 },
        { start: 440, end: 480, length: 40 }
    ];

    expect(createPieces({ length: 480 })).toStrictEqual(pieces);
});

test ('it creates pieces with optional parameters', () => {
    const pieces = [
        { start: 0, end: 120, length: 120 },
        { start: 97.5, end: 217.5, length: 120 },
        { start: 195, end: 315, length: 120 },
        { start: 292.5, end: 412.5, length: 120 },
        { start: 390, end: 480, length: 90 },
    ];

    expect(createPieces({ length: 480, maxPieceLength: 120, lap: 22.5 })).toStrictEqual(pieces);
});

test ('it throws if maxPieceLength is equal to or less than lap length', () => {
    expect(() => createPieces({ length: 40, maxPieceLength: 20 })).toThrowError(
        /^maxPieceLength must be greater than lap.$/, 
    );

    expect(() => createPieces({ length: 20, maxPieceLength: 15 })).toThrowError(
        /^maxPieceLength must be greater than lap.$/, 
    );
});
