import { RunSpec } from './types';
import RunSet from './runset';

export const calculateRunSet = (orthogonalLength: number, orthogonalSpacing: number, runSpec: RunSpec) => {
    return new RunSet(orthogonalLength, orthogonalSpacing, runSpec).calculateRuns();
}
