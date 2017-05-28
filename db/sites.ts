export class BaseSite {
  public siteId?: number;
  public siteName: string = '';
}


export class UserSiteDetails extends BaseSite {
  public siteAccessLevel: number = 0;
  public mapProviderId: number = 0;
}
