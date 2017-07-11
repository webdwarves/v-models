export class BaseSite {
  siteId?: number;
  siteName: string = '';
}

export class SiteDetails extends BaseSite {
  siteId: number;
  siteName: string = '';
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

export class ExtendedSiteDetails extends SiteDetails {
  siteAccessLevel: number = 0;
  mapProviderId: number = 0;
}

class AddSiteParams {
  siteName: string = '';
  latitude: number = 0;
  longitude: number = 0;
  altitude: number = 0;
  deviceMode: number = 0;
  defaultMapProviderId: number;
  timezone: string;
}
