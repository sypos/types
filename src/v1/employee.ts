import { ID } from 'globals';

export interface Employee {
    id: ID;
    name: string;

    email: string;
    phone_number: string | null;

    customer_id: ID;
    stores: ID[];

    role_id: ID;

    pin_code: string;
}