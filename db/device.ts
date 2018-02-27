import { AlarmOnStateEnum, InAlarmStateEnum } from './alarm';

class BaseDeviceInfo {
  deviceId: number;
  deviceName: string;
  onlineState: number;
  hasAnyAlarmActive: boolean;
  className: string;
  signalizationMode: number;
}

export class DeviceInfo extends BaseDeviceInfo {
  signature: string;
  shortAddress: number;
  deviceClassId: number;
  lastOnline: string;
  lastUpdate: string;
  softwareVersion: number;
  softwareCrc: number;
  softwareBuildDatetime: string;
  hardwareVersion: number;
  selfTestStatus: number;
  isArmed: boolean;
}

export class DeviceLocation extends BaseDeviceInfo {
  latitude: number;
  longitude: number;
  altitude: number;
  roll: number;
  pitch: number;
  yaw: number;
  zoneId: number;
  timeStamp: string;
  positionPolicyId: number;
  policyName: string;
}

export class DeviceState {
  deviceId: number;
  stateTypeId: number;
  stateTypeName: string;
  stateFormat: string;
  stateValue: string;
  timeStamp: string;
}

export class DeviceData {
  deviceId: number;
  dataTypeId: number;
  dataTypeName: string;
  dataFormat: string;
  dataValue: string;
  eventTime: string;
  timestamp: string;
}

export class DeviceConfig {
  deviceId: number;
  configTypeId: number;
  configTypeName: string;
  configFormat: string;
  configValue: string;
  timeStamp: string;
}

export class DeviceEventHistory {
  deviceDataId: number;
  deviceId: number;
  eventTypeId: number;
  seqNumber: number;
  eventTime: string;
  timeStamp: string;
  alarmStateTypeId: number;
  eventTypeName: string;
  severityLevel: number;
}

export class DeviceSelfTestHistory {
  resultLogId: number;
  isPass: boolean;
  testName: string;
  timeStamp: string;
}

export class DeviceSelfTest {
  deviceId: number;
  deviceName: string;
  selfTestId: number;
  isActive: boolean;
  result: number;
  startTime: string;
  endTime: string;
}

export class DeviceAlarmSuppressions {
  deviceAlarmSuppressId: number;
  deviceId: number;
  eventTypeId: number;
  isSuppressed: boolean;
  suppressStartTime: string;
  suppressEndTime: string;
  suppressMinutes: number;
}

export class DeviceAlarm {
  deviceId: number;
  eventTypeId: number;
  eventTypeName: string;
  alarmOnState: AlarmOnStateEnum;
  inAlarmState: InAlarmStateEnum;
  eventTime: string;
  timeStamp: string;
}

class DeviceLocationUpdate {
  deviceId: number;
  positionPolicyId: number;
  latitude: number;
  longitude: number;
  altitude: number;
  roll: number;
  pitch: number;
  yaw: number;
}
