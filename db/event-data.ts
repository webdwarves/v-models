import { CameraImageFormat } from './camera'

export class EventDataDetails {
  eventInfoId: number
  eventInfoDetail: string
  timeStamp: string
  imgUrl: string
  imgFormat: CameraImageFormat
}

export class SiteEventData {
  eventDataId: number
  deviceId: number
  deviceName: string
  eventTypeId: number
  seqNumber: number
  eventTime: string
  timeStamp: string
  alarmStateTypeId: number
  eventTypeName: string
  severityLevel: number
  latitude: number
  longitude: number
}
