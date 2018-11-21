export class Timezone {
  timezoneId: number
  timezoneName: string
  timezoneAbbrev: string
  utcOffset: UtcOffset
  isDst: boolean
}

class UtcOffset {
  hours: number
}

export class MapProvider {
  providerId: number
  providerName: string
  providerUrl: string
  minZoomLevel: number
  maxZoomLevel: number
  initialZoomLevel: number
  providerKey: string
  isLocallyHosted: boolean
}

export enum IssueLevelEnum {
  critical = 0,
  warning = 1,
  info = 2
}

export class SystemIssue {
  deviceClassId: number
  deviceId: number
  deviceName: string
  issueDetails: string
  issueId: number
  issueLevel: IssueLevelEnum
  issueTypeId: number
  timeStamp: string
}
