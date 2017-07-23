export class BasePhotoDetails {
  description: string;
  pictureTaken: string;
  deviceImg: object;
}

export class PhotoDetails extends BasePhotoDetails {
  deviceImgId: number;
  timeStamp: string;
}
