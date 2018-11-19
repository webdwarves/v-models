export interface SiteDBNotification {
  siteId: number
}

export interface CameraDeviceDBNotification {
  siteId: number,
  cameraDeviceId: number
}

export type CameraQualityIndex = -1 | 1 | 2 | 3 | 4 | 5 | 6 | 7

export interface CameraQualityIndexUpdate extends SiteDBNotification, CameraDeviceDBNotification {
  qualityIndex: CameraQualityIndex
}