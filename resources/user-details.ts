import { SitePermissions } from '../common/permissions'
import { UserPhotoDetails } from '../common/photo'
import { Permission } from '../db/permissions'
import { SiteDetailsWithStats } from '../db/sites'
import { Tag } from '../db/tags'
import { UserDetails } from '../db/users'

export class UserDetailsModel {
  sites: SiteDetailsWithStats[] = [ new SiteDetailsWithStats() ]
  details: UserDetails = new UserDetails()
  systemPermissions: Permission[] = [ new Permission() ]
  sitesPermissions: { [ siteId: string ]: Permission[] }
  profilePicture: UserPhotoDetails = new UserPhotoDetails()
  tags: Tag[] = [ new Tag() ]
}

interface SitesPermissions {
  [ key: string ]: SitePermissions
}
