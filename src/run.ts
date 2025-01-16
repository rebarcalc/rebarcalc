import { RunSpec } from './types';

export default class Run {
    length: number;
    maxLength: number;
    lap: number;

    constructor({length, diameter = 0.5, maxLength = 240, lappingFactor = 40}: RunSpec) {
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
