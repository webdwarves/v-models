import { DeviceSoftware } from '../db/device-software'
import { Permission } from '../db/permissions'
import { SiteDetails } from '../db/sites'
import { UserDetails } from '../db/users'

export class SiteConfiguration {
  details: SiteDetails = new SiteDetails()
  classFirmwares: DeviceSoftware[] = [ new DeviceSoftware() ]
  userNotificationMatrix: SiteNotificationMatrix = {}
  userSignalizationMatrix: SiteSignalizationMatrix = {}
  siteUsers = [ new UserDetails() ]
  permissions: SitePermissionsMatrix = {}
}

export interface SitePermissionsMatrix {
  [ key: string ]: Permission
}

export interface SiteNotificationMatrix {
  [ key: string ]: SiteNotificationSettings
}

export interface SiteSignalizationMatrix {
  [ key: string ]: SiteSignalizationSettings
}

export interface SiteSignalizationSettings {
  [ key: string ]: string
}

export class SiteNotificationSettings {
  sms: boolean
  email: boolean
}
