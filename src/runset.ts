import { RunSpec, Pieces } from './types';
import Run from './run.js';

export default class RunSet {
    orthogonalLength: number;
    orthogonalSpacing: number;
    runSpec: RunSpec;

    constructor(orthogonalLength: number, orthogonalSpacing: number, runSpec: RunSpec) {
        this.orthogonalLength = orthogonalLength;
        this.orthogonalSpacing = orthogonalSpacing;
        this.runSpec = runSpec;
    }

    calculateRuns = () => {
        if (this.orthogonalLength <= 0 || this.orthogonalSpacing <= 0) {
            return [];
        }

        const runs: { offset: number, run: Pieces }[] = [];

        const runCount: number = Math.floor(this.orthogonalLength / this.orthogonalSpacing) + 1;
        const start: number = (this.orthogonalLength - (runCount - 1) * this.orthogonalSpacing) /2 ;
      
        for (let i = 1; i <= runCount; i++) {
            const offset: number = start + (i - 1) * this.orthogonalSpacing;
    
            const run = new Run(this.runSpec).calculatePieces();

            runs.push({
                offset: offset,
                run: run
            });
        }
    
        return runs;
    }
}
