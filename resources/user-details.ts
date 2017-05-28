import { UserSiteDetails } from 'models/db/sites';
import { UserDetails } from 'models/db/users';
import { SystemPermissionTypeName } from 'models/db/permissions';
import { Tag } from 'models/db/tags';
import { SitePermissions } from 'models/common/permissions';

export class UserDetailsModel {
  sites: UserSiteDetails[] = [];
  details: UserDetails = new UserDetails();
  systemPermissions: SystemPermissionTypeName[] = [];
  sitesPermissions: SitesPermissions = {'': new SitePermissions()};
  tags: Tag[];
}

interface SitesPermissions {
  [key: string]: SitePermissions
}
