import { PermissionTypeNameEnum } from '../common/permissions'
export class Permission {
  permissionTypeId?: number;
  permissionTypeName: PermissionTypeNameEnum = PermissionTypeNameEnum.NoAccess;
  permissionLevel: number = 1;
}

export class SystemPermissionTemplate extends Permission {
  systemPermissionTemplateId?: number;
}

export class SitePermissionTemplate extends Permission {
  systemPermissionTemplateId?: number;
}

export class DbPermissionModel {
  permissionTypeId: number;
  permissionTypeName: string;
  isForSite: boolean;
}


export enum SystemPermissionTypeName {
  AdminPageAccess,
  ManageSystemUsers,
  ViewBilling,
  AddOrDeleteSites
}

export enum SitePermissionTypeName {
  SiteConfiguration,
  ManageDevices,
  Structures,
  Zones,
  AlarmHandling,
  SignalizationEditor,
  NotificationEditor,
  SiteEvacuation
}
