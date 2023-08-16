import { ID } from 'globals';

enum ModifierCalculationBy {
    'SUM',
    'BIGGER',
}

export interface Modifier {
    id: ID;
    deleted: boolean;

    // Basic Infos
    name: string;
    description?: string;
    calculation_by: ModifierCalculationBy;

    // Max and Min Options
    min_options: number | null;
    max_options: number | null;

    // Modifier Options
    options: ModifierOpetion[];
}

export interface ModifierOpetion {
    ID: ID;
    deleted: boolean;

    // Basic Infos
    name: string;
    price: number;
    position: number;

    available: boolean;
}