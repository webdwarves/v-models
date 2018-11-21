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

interface SystemIssueBase {
  issueTypeId: number
  deviceId: number
  deviceName: string
  deviceClassId: number
  issueDetails: string
  issueLevel: IssueLevelEnum
  timeStamp: string
}

export interface SystemIssue extends SystemIssueBase {
  issueId: number
}

export interface HistoricalSystemIssue extends SystemIssueBase {
  issueHistoryId: number
  eventTime: string
}
