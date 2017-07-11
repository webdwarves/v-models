type file = number;

export class BasePhotoDetails {
  description: string;
  pictureTaken: string;
  deviceImg: file;
}

export class PhotoDetails extends BasePhotoDetails {
  deviceImgId: number;
  timeStamp: string;
}
