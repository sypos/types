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

    // Stores (BackOffice)
    stores: StoreVarient[];

    // Mods
    variants_names: string[];
    variants: ItemVariant[];

    modifiers_ids: ID[];

    // Icon
    icon: `cdn://${string}` | string;
    icon_color: number;
}

export interface ItemVariant {
    id: ID;
    available: boolean;

    // Basic Infos
    option_names: string[];
    price: number | null;

    stores: StoreVarient[];
}

export interface StoreVarient {
    id: ID;

    available: boolean;
    available_in_store: boolean;
    
    price: number | null;
}

export * from './Modifier';