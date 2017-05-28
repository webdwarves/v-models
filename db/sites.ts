export class BaseSite {
  siteId?: number;
  siteName: string = '';
}


export class UserSiteDetails extends BaseSite {
  siteAccessLevel: number = 0;
  mapProviderId: number = 0;
}
