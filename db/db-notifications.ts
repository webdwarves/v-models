import { CameraQualityIndex } from './camera'

export interface SiteDBNotification {
  siteId: number
}

export interface CameraDeviceDBNotification {
  siteId: number
  cameraDeviceId: number
}

export interface CameraQualityIndexUpdate extends SiteDBNotification, CameraDeviceDBNotification {
  qualityIndex: CameraQualityIndex
}
