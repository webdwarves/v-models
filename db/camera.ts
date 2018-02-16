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

export interface Camera {
  cameraDeviceId: number,
  cameraDeviceName: string,
  cameraUrl: string
}