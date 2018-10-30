export class Timezone {
  timezoneId: number;
  timezoneName: string;
  timezoneAbbrev: string;
  utcOffset: UtcOffset;
  isDst: boolean;
}

class UtcOffset {
  hours: number;
}

export class MapProvider {
  providerId: number;
  providerName: string;
  providerUrl: string;
  minZoomLevel: number;
  maxZoomLevel: number;
  initialZoomLevel: number;
  providerKey: string;
  isLocallyHosted: boolean;
}

export enum IssueLevelEnum {
  info = 1,
  warning = 2,
  critical = 3
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
