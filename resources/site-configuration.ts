import { SiteDetails } from '../db/sites';
import { DeviceSoftware } from '../db/device-software';
import { UserDetails } from '../db/users';

export class SiteConfiguration {
  details: SiteDetails[] = [];
  classFirmware: DeviceSoftware[] = [];
  userNotificationMatrix: SiteNotificationMatrix;
  userSignalizationMatrix: SiteSignalizationMatrix;
  siteUsers: UserDetails[]
}

export interface SiteNotificationMatrix {
  [key: string]: SiteNotificationSettings;
}

export interface SiteSignalizationMatrix {
  [key: string]: SiteSignalizationSettings;
}

export interface SiteSignalizationSettings {
  [key: string]: string;
}

export class SiteNotificationSettings {
  sms: boolean;
  email: boolean;
}
