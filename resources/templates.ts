import { SystemPermissionTemplate, SitePermissionTemplate } from '../db/permissions';
import { NotificationTemplate } from '../db/notifications';
import { SignalizationTemplate } from '../db/signalizations';

export class TemplatesResourceModel {
  systemPermissions: SystemPermissionsTemplates;
  sitePermissions: SitePermissionTemplates;
  notifications: NotificationTemplates;
  signalization: SignalizationTemplates;
}

interface SystemPermissionsTemplates {
  [key: string]: SystemPermissionTemplate[];
}

interface SitePermissionTemplates {
  [key: string]: SitePermissionTemplate[];
}

interface NotificationTemplates {
  [key: string]: NotificationTemplate[];
}

interface SignalizationTemplates {
  [key: string]: SignalizationTemplate[];
}
