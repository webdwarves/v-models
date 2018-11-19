import { SiteAddOnFunctionalitySettings, SiteDeviceAlarm, SiteDeviceClass } from '../db/site-add-on-functionality-settings'
import { SiteDetailsWithStats } from '../db/sites'

export class SiteAddOnsResourceModel {
  details: SiteAddOnFunctionalitySettings[] = [ new SiteAddOnFunctionalitySettings() ]
  availableClasses: SiteDeviceClass[] = [ new SiteDeviceClass() ]
  availableAlarms: SiteDeviceAlarm[] = [ new SiteDeviceAlarm() ]
  siteDetails: SiteDetailsWithStats = new SiteDetailsWithStats()
}
