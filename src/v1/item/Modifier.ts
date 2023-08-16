import { ID } from 'globals';

export interface Modifier {
    id: ID;
    deleted: boolean;

    // Basic Infos
    name: string;
    description?: string;

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