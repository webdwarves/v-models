import {
  SiteAddOnFunctionalitySettings,
  SiteDeviceClass,
  SiteDeviceAlarm
} from '../db/site-add-on-functionality-settings';

export class SiteAddOnsResourceModel {
  details: SiteAddOnFunctionalitySettings[] = [];
  availableClasses: SiteDeviceClass[] = [];
  availableAlarms: SiteDeviceAlarm[] = [];
}
