import {
  DeviceLocation,
  DeviceInfo,
  DeviceState,
  DeviceData,
  DeviceConfig,
  DeviceEventHistory,
  DeviceSelfTestHistory,
  DeviceSelfTest,
  DeviceAlarmSuppressions,
  DeviceAlarm
} from '../db/device';

export class DevicesModel {
  details: DeviceInfo;
  location: DeviceLocation;
  state: DeviceState[];
  data: DeviceData[];
  config: DeviceConfig[];
  eventHistory: DeviceEventHistory[];
  selfTestHistory: DeviceSelfTestHistory[];
  selfTest: DeviceSelfTest[];
  alarmSuppressions: DeviceAlarmSuppressions[];
  alarms: DeviceAlarm[];
}

class SiteDeviceDetails {
  info: DeviceInfo;
  location: DeviceLocation;
  selfTest: DeviceSelfTest;
}

export class SeteDevicesDetails {
  [key: string]: SiteDeviceDetails
}

export class AddDeviceModel {
  deviceName: string;
  signature: string;
  deviceClassId: number;
  latitude?: number;
  longitude?: number;
  altitude?: number;
  roll?: number;
  pitch?: number;
  yaw?: number;
  positionPolicyId?: number;
}
