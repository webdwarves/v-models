import { UserSiteDetails } from '../db/sites';
import { DeviceSoftware } from '../db/device-software';
import { UserDetails } from '../db/users';

export class UserDetailsModel {
  details: UserSiteDetails[] = [];
  classFirmware: DeviceSoftware[] = [];
  userNotificationMatrix: UserNotificationMatrix;
  userSignalizationMatrix: UserSignalizationMatrix;
  siteUsers: UserDetails[]
}

export class UserNotificationSettings {
  sms: boolean;
  email: boolean;
}

export interface UserNotificationMatrix {
  [key: string]: UserNotificationSettings;
}

export interface UserSignalizationMatrix {
  [key: string]: UserSignalizationSettings;
}

export interface UserSignalizationSettings {
  [key: string]: string;
}
