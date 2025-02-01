import { Runs, MatSpec } from './types';
import RunSet from './runset.js';

export default class Mat {
    matSpec: MatSpec;

    constructor(matSpec: MatSpec) {
        this.matSpec = matSpec;
    }
   
    calculateRunSets = () => {
        const runSets: { xRunSet: Runs[], yRunSet: Runs[] } = {
            xRunSet: [],
            yRunSet: []
        };

        runSets['xRunSet'] = new RunSet(this.matSpec.yLength, this.matSpec.ySpacing, { length: this.matSpec.xLength, maxLength: this.matSpec.maxLength }).calculateRuns();
        runSets['yRunSet'] = new RunSet(this.matSpec.xLength, this.matSpec.xSpacing, { length: this.matSpec.yLength, maxLength: this.matSpec.maxLength }).calculateRuns();

        return runSets;
    }
}
