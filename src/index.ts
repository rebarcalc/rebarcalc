import { MatSpec } from './types';
import Mat from './mat.js';

export const calculateMat = (matSpec: MatSpec) => {
    return new Mat(matSpec).calculateRunSets();
}
