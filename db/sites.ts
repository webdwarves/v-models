export class BaseSite {
  siteId?: number;
  siteName: string = '';
}


export class SiteDetails extends BaseSite {
  siteAccessLevel: number = 0;
  mapProviderId: number = 0;
  siteId: number;
  siteNam: string;
  latitude: number;
  longitude: number;
  altitude: number;
  deviceMode: number;
  defaultMapProviderId: number;
  timezone: string;
}

export class SiteDetailsWithStats extends SiteDetails {
  userCount: number;
  deviceCount: number;
  alarmCount: number;
}
