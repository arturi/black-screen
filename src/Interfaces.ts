import e = require('./Enums');

export interface Dimensions {
    columns: number;
    rows: number;
}

export interface Attributes {
    color?: e.Color;
    weight?: e.Weight;
    underline?: boolean;
    crossedOut?: boolean;
}

export interface Advancement {
    vertical?: number;
    horizontal?: number;
}

export interface Position {
    column: number;
    row: number;
}

export interface AutocompletionProvider {
    getSuggestions(currentDirectory: string, input: string): Promise<Suggestion[]>;
}

export interface Suggestion {
    value: string;
    priority: number;
    synopsis: string;
    description: string;
    type: string;
}
