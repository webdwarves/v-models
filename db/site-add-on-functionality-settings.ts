export class SiteAddOnFunctionalitySettings {
  siteAddonFunctionalityId?: number
  addonFunctionalityId?: string
  functionalityName: string = ''
  configValue: string = ''
  configFormat: string = ''
  defaultConfigValue?: string
  description: string = ''
}

export class SiteDeviceClass {
  siteDeviceClassId?: number
  classId: number = 0
  className: string = ''
}

export class SiteDeviceAlarm {
  siteDeviceAlarmId?: number
  eventTypeId: number
  eventTypeName: string
}
