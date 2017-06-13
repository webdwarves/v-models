export class BaseSite {
  siteId?: number;
  siteName: string = '';
}


export class UserSiteDetails extends BaseSite {
  siteAccessLevel: number = 0;
  mapProviderId: number = 0;
  siteId: 524;
  siteNam: string;
  latitude: number;
  longitude: number;
  altitude: number;
  deviceMode: number;
  defaultMapProviderId: number;
  timezone: string;
}

export class UserSiteDetailsWithStats extends UserSiteDetails {
  userCount: number;
  deviceCount: number;
  alarmCount: number;
}
