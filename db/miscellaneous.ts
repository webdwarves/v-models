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

export class SystemIssue {
  issueId: number;
  issueTypeId: number;
  deviceId: number;
  issueDetails: string;
  issueLevel: number;
  timeStamp: string;
}
