import { UserPhotoDetails } from '../common/photo'
import { SiteDetailsWithStats } from '../db/sites';
import { UserDetails } from '../db/users';
import { Permission } from '../db/permissions'
import { Tag } from '../db/tags';
import { SitePermissions } from '../common/permissions';

export class UserDetailsModel {
  sites: SiteDetailsWithStats[] = [new SiteDetailsWithStats()];
  details: UserDetails = new UserDetails();
  systemPermissions: Permission[] = [new Permission()];
  sitesPermissions: { [siteId: string]: Permission[] };
  profilePicture: UserPhotoDetails = new UserPhotoDetails();
  tags: Tag[] = [new Tag()];
}

interface SitesPermissions {
  [key: string]: SitePermissions
}
