import {
  DeviceAlarm,
  DeviceAlarmSuppressions,
  DeviceConfig,
  DeviceData,
  DeviceEventHistory,
  DeviceInfo,
  DeviceLocation,
  DeviceSelfTest,
  DeviceSelfTestHistory,
  DeviceState
} from '../db/device'

export class DevicesModel {
  details: DeviceInfo
  location: DeviceLocation
  state: DeviceState[]
  data: DeviceData[]
  config: DeviceConfig[]
  eventHistory: DeviceEventHistory[]
  selfTestHistory: DeviceSelfTestHistory[]
  selfTest: DeviceSelfTest[]
  alarmsSuppresions: DeviceAlarmSuppressions[]
  alarms: DeviceAlarm[]
}

export class SiteDeviceDetails {
  info: DeviceInfo
  location: DeviceLocation
  config: DeviceConfig[]
}

export class SiteDevicesDetails {
  [ key: string ]: SiteDeviceDetails
}

export class AddDeviceModel {
  deviceName: string
  signature: string
  deviceClassId: number
  latitude?: number
  longitude?: number
  altitude?: number
  roll?: number
  pitch?: number
  yaw?: number
  positionPolicyId?: number
  compassAlpha?: number
  compassBeta?: number
  compassGamma?: number
  trueHeading?: number
}
