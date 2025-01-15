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
        const effectiveLength: number = this.length + this.lap;
        const pieceCount: number = Math.floor(effectiveLength / (this.maxLength - this.lap));
        const pieces: { start: number, end: number, length: number }[] = [];

        let currentStart: number = 0;

        for (let i = 0; i < pieceCount; i++) {
            const currentEnd: number = currentStart + this.maxLength;

            pieces.push({
                start: currentStart,
                end: currentEnd,
                length: this.maxLength
            });

            currentStart = currentEnd - this.lap;
        }

        const remainder = this.length % (this.maxLength - this.lap);

        if (remainder > 0) {
            pieces.push({
                start: currentStart,
                end: currentStart + remainder,
                length: remainder
            });
        }

        return pieces;
    }
}
