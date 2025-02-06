import { Piece, createPieces } from './Piece.js';

export interface Run {
    offset: number;
    pieces: Piece[];
}

interface Params {
    orthogonalLength: number;
    orthogonalSpacing: number;
    length: number;
    maxPieceLength?: number;
    lap?: number;
}

export const createRuns = ({ orthogonalLength, orthogonalSpacing, length, maxPieceLength = 240, lap = 20 }: Params): Run[] => {
    if (orthogonalLength <= 0 || orthogonalSpacing <= 0) {
        return [];
    }

    const runs: Run[] = [];

    const runCount: number = Math.floor(orthogonalLength / orthogonalSpacing) + 1;
    const start: number = (orthogonalLength - (runCount - 1) * orthogonalSpacing) / 2 ;
    
    for (let i = 1; i <= runCount; i++) {
        const offset: number = start + (i - 1) * orthogonalSpacing;

        const piece = createPieces({ length, maxPieceLength, lap });

        runs.push({
            offset: offset,
            pieces: piece
        });
    }

    return runs;
};
