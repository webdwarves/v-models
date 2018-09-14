export enum AlarmOnStateEnum {
  disabled = 0,
  enabled = 1,
  pendingOff = 2,
  pendingOn = 3
}

export enum InAlarmStateEnum {
  noAlarm = 0,
  inAlarm = 1,
  pendingClear = 2
}

export class AlarmState {
  deviceId: number;
  deviceName: string;
  deviceClassId: number;
  eventTypeId: number;
  eventTypeName: string;
  alarmOnState: AlarmOnStateEnum;
  inAlarmState: InAlarmStateEnum;
  eventTime: string;
  timeStamp: string;
}

export interface AlarmStateWithSite extends AlarmState {
  siteId: number;
  siteName: string;
}