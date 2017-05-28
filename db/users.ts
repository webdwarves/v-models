import { getEnumMembers } from '../utils/functions'

export enum StatusEnum {
  active = 1,
  inactive = 0
}

export class UserDetails {
  static statusList = getEnumMembers(StatusEnum);
  userId?: number;
  userName: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';
  accessLevel: number = 0;
  status: StatusEnum = StatusEnum.active;
  timezone: string = '';
}
