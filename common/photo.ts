export class BasePhotoDetails {
  description: string;
  pictureTaken: string;
}

export class PhotoDetails extends BasePhotoDetails {
  deviceImgId: number;
  timeStamp: string;
}

export class UserPhotoDetails {
  userImgId: number;
  timeStamp: string;
}