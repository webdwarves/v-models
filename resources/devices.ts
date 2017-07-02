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
  lcoation: DeviceLocation;
  state: DeviceState[];
  data: DeviceData[];
  config: DeviceConfig[];
  eventHistory: DeviceEventHistory[];
  selfTestHistory: DeviceSelfTestHistory[];
  selfTest: DeviceSelfTest[];
  alarmSuppressions: DeviceAlarmSuppressions[];
  alarms: DeviceAlarm[];
}
