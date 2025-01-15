export default class Run {
    length: number;
    maxLength: number;
    lap: number;

    constructor(length: number, diameter: number = 0.5, maxLength: number = 240, lappingFactor: number = 40) {
        this.length = length;
        this.maxLength = maxLength;
        this.lap = diameter * lappingFactor;
    }

    calculatePieces = () => {
        if (this.maxLength <= this.lap) {
            throw new Error("maxLength must be greater than lap.");
        }

        const pieces: { start: number, end: number, length: number }[] = [];

        let currentLength: number = 0;

        while (currentLength < this.length) {
            const nextPieceLength: number = Math.min(this.maxLength, this.length - currentLength);
            const startPosition: number = currentLength;
            const endPosition: number = startPosition + nextPieceLength;

            pieces.push({
                start: startPosition,
                end: endPosition,
                length: nextPieceLength
            });

            currentLength += nextPieceLength;

            if (currentLength < this.length) {
                currentLength -= this.lap;
            }
    
            if (currentLength < 0) {
                currentLength = 0;
            }
        }

        return pieces;            
    }
}
