import { NotificationTemplate } from '../db/notifications'
import { SitePermissionTemplate, SystemPermissionTemplate } from '../db/permissions'
import { SignalizationTemplate } from '../db/signalizations'

export class TemplatesResourceModel {
  systemPermissions: SystemPermissionsTemplates = {}
  sitePermissions: SitePermissionTemplates = {}
  notifications: NotificationTemplates = {}
  signalization: SignalizationTemplates = {}
}

interface SystemPermissionsTemplates {
  [ key: string ]: SystemPermissionTemplate[];
}

interface SitePermissionTemplates {
  [ key: string ]: SitePermissionTemplate[];
}

interface NotificationTemplates {
  [ key: string ]: NotificationTemplate[];
}

interface SignalizationTemplates {
  [ key: string ]: SignalizationTemplate[];
}
