export interface Piece {
    start: number;
    end: number;
    length: number;
}

interface Params {
    length: number;
    maxPieceLength?: number;
    lap?: number;
}

export const createPieces = ({ length, maxPieceLength = 240, lap = 20 }: Params): Piece[] => {
    if (maxPieceLength <= lap) {
        throw new Error("maxPieceLength must be greater than lap.");
    }

    const pieces: Piece[] = [];
    let currentLength: number = 0;

    while (currentLength < length) {
        const nextPieceLength: number = Math.min(maxPieceLength, length - currentLength);
        const startPosition: number = currentLength;
        const endPosition: number = startPosition + nextPieceLength;

        pieces.push({
            start: startPosition,
            end: endPosition,
            length: nextPieceLength
        });

        currentLength += nextPieceLength;

        if (currentLength < length) {
            currentLength -= lap;
        }

        if (currentLength < 0) {
            currentLength = 0;
        }
    }

    return pieces;
};
