import { ID } from 'globals';
import { Store } from './store';

export interface Customer {
    id: ID;
    name: string;

    deleted: boolean;

    email: string;
    phone_number: string;

    created_at: string | null;

    stores: Store[];
}