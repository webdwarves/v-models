import { SiteDetailsWithStats } from '../db/sites';
import { UserDetails } from '../db/users';
import { SystemPermissionTypeName } from '../db/permissions';
import { Tag } from '../db/tags';
import { SitePermissions } from '../common/permissions';

export class UserDetailsModel {
  sites: SiteDetailsWithStats[] = [new SiteDetailsWithStats()];
  details: UserDetails = new UserDetails();
  systemPermissions: SystemPermissionTypeName[] = [];
  sitesPermissions: SitesPermissions = {'': new SitePermissions()};
  tags: Tag[] = [new Tag()];
}

interface SitesPermissions {
  [key: string]: SitePermissions
}
