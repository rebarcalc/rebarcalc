import { Mat, createMat } from './Mat';

interface Params {
    xLength: number;
    yLength: number;
    xSpacing: number;
    ySpacing: number;
    maxPieceLength?: number;
    diameter?: number;
    lappingFactor?: number;
}

export const calculateMat = ({ xLength, yLength, xSpacing, ySpacing, maxPieceLength = 240, diameter = 0.5, lappingFactor = 40 }: Params): Mat => {
    return createMat({ xLength, yLength, xSpacing, ySpacing, maxPieceLength, diameter, lappingFactor });
}
