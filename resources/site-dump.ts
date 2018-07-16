import { DeviceAlarm, DeviceAlarmSuppressions, DeviceConfig, DeviceInfo, DeviceLocation } from '../db/device';
import { Grouping } from '../db/grouping';
import { Permission } from '../db/permissions';
import { SiteAddOnFunctionalitySettings, SiteDeviceAlarm, SiteDeviceClass } from '../db/site-add-on-functionality-settings';
import { SiteDetails } from '../db/sites';
import { Structure } from '../db/structures';
import { UserDetails } from '../db/users';
import { Zone } from '../db/zone';

export interface DumpDeviceDetails {
  info: DeviceInfo;
  location: DeviceLocation;
}

export interface DumpDeviceConfig {
  config: DeviceConfig[];
  alarms: DeviceAlarm[];
  alarmsSuppresions: DeviceAlarmSuppressions[];
}

export interface DumpDeviceChanges extends Partial<DumpDeviceDetails>, Partial<DumpDeviceConfig> {
}

export interface SiteDumpResourceModel {
  user: UserDetails;
  site: SiteDetails;
  permissions: Permission[];
  devices: {
    [ key: string ]: DumpDeviceDetails;
  },
  devicesConfig: {
    [ key: string ]: DumpDeviceConfig;
  }
  addOns: {
    details: SiteAddOnFunctionalitySettings[];
    availableClasses: SiteDeviceClass[];
    availableAlarms: SiteDeviceAlarm[];
  },
  map: {
    groupings: Grouping[];
    structures: Structure[];
    zones: Zone[];
  }
}
