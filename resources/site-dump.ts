import { DeviceAlarm, DeviceAlarmSuppressions, DeviceConfig, DeviceInfo, DeviceLocation } from '../db/device';
import { Permission } from '../db/permissions';
import { SiteDetails } from '../db/sites';
import { UserDetails } from '../db/users';

export interface SiteDumpResourceModel {
  user: UserDetails;
  site: SiteDetails;
  permissions: Permission[];
  devices: {
    [ key: string ]: {
      info: DeviceInfo;
      location: DeviceLocation;
    }
  },
  devicesConfig: {
    [ key: string ]: {
      config: DeviceConfig[];
      alarms: DeviceAlarm[];
      alarmsSuppresions: DeviceAlarmSuppressions[];
    }
  }
}
