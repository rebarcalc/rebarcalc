export interface RunSpec {
    length: number;
    diameter?: number;
    maxLength?: number;
    lappingFactor?: number;
}

export interface Piece {
    start: number;
    end: number;
    length: number;
}

export type Pieces = Piece[];
