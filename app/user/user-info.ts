import { AddressInfo } from './';

export class UserInfo {
    uid: string;
    password: string;
    firstName: string;
    lastName: string;
    dob?: Date;
    country?: number;
    phone?: number;
    cell?: number;
    email?: string;
    address?: AddressInfo;
}