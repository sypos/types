import { ID } from 'globals';

enum ItemSaleType {
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
    variants: ItemVariant[];
}

interface ItemVariant {
    option_names: string[];
    price: number | null;

    available: boolean;
}