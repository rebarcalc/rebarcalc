import Run from './run.js';

export const calculateRun = (length: number, diameter: number, maxLength: number, lappingFactor: number) => {
    return new Run(length, diameter, maxLength, lappingFactor).calculatePieces();
}
