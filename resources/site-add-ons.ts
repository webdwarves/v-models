import {
  SiteAddonFunctionalitySettings,
  SiteDeviceClass,
  SiteDeviceAlarm
} from 'models/db/site-add-ons';

export class SiteAddOnsResourceModel {
  details: SiteAddonFunctionalitySettings[] = [];
  availableClasses: SiteDeviceClass[] = [];
  availableAlarms: SiteDeviceAlarm[] = [];
}
