import { getEnumMembers } from '../utils/functions'

export enum StatusEnum {
  active = 1,
  inactive = 0
}

export class UserDetails {
  static statusList = getEnumMembers(StatusEnum);
  public userId?: number;
  public userName: string = '';
  public firstName: string = '';
  public lastName: string = '';
  public email: string = '';
  public phone: string = '';
  public accessLevel: number = 0;
  public status: StatusEnum = StatusEnum.active;
  public timezone: string = '';
}
