export class BaseSite {
  siteId?: number;
  siteName: string = '';
}


export class SiteDetails extends BaseSite {
  siteAccessLevel: number = 0;
  mapProviderId: number = 0;
  siteId: number;
  siteNam: string = '';
  latitude: number = 0;
  longitude: number = 0;
  altitude: number = 0;
  deviceMode: number = 0;
  defaultMapProviderId: number;
  timezone: string;
}

export class SiteDetailsWithStats extends SiteDetails {
  userCount: number = 0;
  deviceCount: number = 0;
  alarmCount: number = 0;
}
