import { RunSet, createRunSet } from './RunSet';

export interface Mat {
    runSets: RunSet[];
}

interface Params {
    xLength: number;
    yLength: number;
    xSpacing: number;
    ySpacing: number;
    maxPieceLength?: number;
    diameter?: number;
    lappingFactor?: number;
}

export const createMat = ({ xLength, yLength, xSpacing, ySpacing, maxPieceLength = 240, diameter = 0.5, lappingFactor = 40 }: Params): Mat => {
    const lap: number = diameter * lappingFactor;

    const mat: Mat = {
        runSets: []
    };

    mat.runSets.push(
        createRunSet({
            direction: 0,
            orthogonalLength: yLength,
            orthogonalSpacing: ySpacing,
            length: xLength,
            maxPieceLength: maxPieceLength,
            lap: lap
        })
    );

    mat.runSets.push(
        createRunSet({
            direction: 90,
            orthogonalLength: xLength,
            orthogonalSpacing: xSpacing,
            length: yLength,
            maxPieceLength: maxPieceLength,
            lap: lap
        })
    );

    return mat;
}
