import { ID } from '../globals';

export interface Role {
    id: ID;
    name: string;

    customer_id: ID;

    permissions: number;
}

export enum RolePermissions {
    ADMINISTRATOR = 1n << 0n,
    MANAGE_STORE = 1n << 1n,
}