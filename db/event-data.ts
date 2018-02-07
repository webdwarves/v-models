export class EventDataDetails {
  eventInfoId: number;
  eventInfoDetail: string;
  timeStamp: string;
}

export class DeviceEventInfoDetail {
  deviceEventInfoId: number;
  eventInfoDetail: string;
  timeStamp: string;
}

export class SiteEventData {
  eventDataId: number;
  deviceId: number;
  deviceName: string;
  eventTypeId: number;
  seqNumber: number;
  eventTime: string;
  timeStamp: string;
  alarmStateTypeId: number;
  eventTypeName: string;
  severityLevel: number;
}
