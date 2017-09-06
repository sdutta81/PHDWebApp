import { AddressInfo } from './';

export class UserInfo {
    uid: string;
    guid: string;
    firstName: string;
    middleName: string;
    lastName: string;
    dob?: Date;
    country?: number;
    phone?: number;
    cell?: number;
    email?: string;
    address?: AddressInfo;
}