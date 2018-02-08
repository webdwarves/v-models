export class BaseSite {
  siteId?: number;
  siteName: string = '';
}

export enum DeviceMode {
  Normal = 0,
  Evacuation = 1,
  EvacuationClear = 2
}

export class SiteDetails extends BaseSite {
  siteId: number;
  siteName: string = '';
  latitude: number = 0;
  longitude: number = 0;
  altitude: number = 0;
  deviceMode: DeviceMode = DeviceMode.Normal;
  defaultMapProviderId: number;
  timezone: string;
}

export class SiteDetailsWithStats extends SiteDetails {
  userCount: number = 0;
  deviceCount: number = 0;
  alarmCount: number = 0;
  maxUserCount: number = 0;
  evacuationEnabled: boolean = false;
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
