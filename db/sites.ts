export class BaseSite {
  siteId?: number;
  siteName: string = '';
}


export class UserSiteDetails extends BaseSite {
  siteAccessLevel: number = 0;
  mapProviderId: number = 0;
}

export class UserSiteDetailsWithStats extends UserSiteDetails {
  latitude: number;
  longitude: number;
  altitude: number;
  deviceMode: number;
  defaultMapProviderId: number;
  timezone: string;
  userCount: number;
  deviceCount: number;
  alarmCount: number;
}
