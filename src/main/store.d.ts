import { ID } from 'globals';
import { Item } from './items';

export interface Store {
    id: ID;
    name: string;
    description: string | null;
    deleted: boolean;

    customer_id: ID;

    phone_number: string;

    address: string | null;
    city: string | null;
    region: string | null;
    postal_code: string | null;
    country_code: string | null;

    created_at: string | null;

    items: Item[];
}

export interface StoreConfigs {
    currency: StoreConfigCurrency;
    reciept: StoreConfigsReciept;

    inventory_alert: boolean;
}

export interface StoreConfigCurrency {
    symbol: string;
    format: 'PREFIX' | 'SUFIX';

    decimal_separator: string;
    thousand_separator: string;
}

export interface StoreConfigsReciept {
    include_customer_infos: boolean;
    include_notes: boolean;

    locale: string;

    printed_image: string | null;
    email_image: string | null;

    header: string | null;
    footer: string | null;
}