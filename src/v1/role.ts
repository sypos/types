import { ID } from '../globals';

export interface Role {
    id: ID;
    name: string;

    customer_id: ID;

    permissions: number;
}