import { Run, createRuns } from './Run';

export interface RunSet {
    direction: number;
    runs: Run[];
}

interface Params {
    direction: number;
    orthogonalLength: number;
    orthogonalSpacing: number;
    length: number;
    maxPieceLength?: number;
    lap?: number;
}

export const createRunSet = ({ direction, orthogonalLength, orthogonalSpacing, length, maxPieceLength = 240, lap = 20 }: Params): RunSet => {
    const runs = createRuns({ orthogonalLength, orthogonalSpacing, length, maxPieceLength, lap });

    const runSet: RunSet = {
        direction: direction,
        runs: runs
    };

    return runSet;
}
