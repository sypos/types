import { ID } from 'globals';

export enum ItemSaleType {
    'VOLUME',
    'UNIT',
}

export interface Item {
    id: ID;
    deleted: boolean;

    // Basic Infos
    name: string;
    description?: string;
    price: number | null;
    sale_type: ItemSaleType;

    category_id?: ID;

    available: boolean;

    // Mods
    variants_names: string[];
    variants: ItemVariant[];

    modifiers_ids: ID[];
}

export interface ItemVariant {
    id: ID;
    available: boolean;

    // Basic Infos
    option_names: string[];
    price: number | null;
}
export * from './Modifier';