import {
  SiteAddOnFunctionalitySettings,
  SiteDeviceClass,
  SiteDeviceAlarm
} from '../db/site-add-on-functionality-settings';

export class SiteAddOnsResourceModel {
  details: SiteAddOnFunctionalitySettings[] = [new SiteAddOnFunctionalitySettings()];
  availableClasses: SiteDeviceClass[] = [new SiteDeviceClass()];
  availableAlarms: SiteDeviceAlarm[] = [new SiteDeviceAlarm()];
}
