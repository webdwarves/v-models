import { getEnumMembers } from '../utils/functions'
import { BaseSite } from './sites'
import { Tag } from './tags'

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
  useOwnTimezone: boolean = false;
  languageId: number;
  companyName: string;
  jobPosition: string;
  resetPassword: boolean = true;
}

export class ExtendedUserDetails extends UserDetails {
  sites: BaseSite[]
  tags: Tag[]
}