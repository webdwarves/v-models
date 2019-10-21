export type CameraQualityIndex = -1 | 1 | 2 | 3 | 4 | 5 | 6 | 7

export enum CameraImageFormat {
  jpeg = 'jpeg',
  mjpeg = 'mjpeg'
}

export interface CameraImage {
  cameraImgId: number
  cameraDeviceId: number
  cameraDeviceName: string
  deviceId: number
  deviceName: string
  eventTypeId: number
  imgUrl: string
  pictureTaken: string
  timeStamp: string
  qualityIndex: number
  format: CameraImageFormat
}

export interface CameraImageWithLocation extends CameraImage {
  latitude: number
  longitude: number
}

export interface Camera {
  cameraDeviceId: number
  cameraDeviceName: string
  cameraUrl: string
}

export interface CameraWithQualityIndex extends Camera {
  qualityIndex: CameraQualityIndex
}
