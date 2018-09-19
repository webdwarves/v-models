export interface CameraImage {
  cameraImgId: number,
  cameraDeviceId: number,
  cameraDeviceName: string,
  deviceId: number,
  deviceName: string,
  eventTypeId: number,
  imgUrl: string,
  pictureTaken: string,
  timeStamp: string
}

export interface CameraImageWithLocation extends CameraImage {
  latitude: number,
  longitude: number
}

export interface Camera {
  cameraDeviceId: number,
  cameraDeviceName: string,
  cameraUrl: string
}