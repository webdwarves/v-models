import { getEnumMembers } from '../utils/functions';

export enum PermissionLevelEnum {
  NoAccess = 0,
  ReadOnlyAccess = 1,
  ReadAndWrite = 2
}

export class SitePermissions {
  static permissionTypes = getEnumMembers(PermissionLevelEnum);
  SiteConfiguration: number = PermissionLevelEnum.NoAccess;
  ManageDevices: number = PermissionLevelEnum.NoAccess;
  Structures: number = PermissionLevelEnum.NoAccess;
  Zones: number = PermissionLevelEnum.NoAccess;
  AlarmHandling: number = PermissionLevelEnum.NoAccess;
  SignalizationEditor: number = PermissionLevelEnum.NoAccess;
  NotificationEditor: number = PermissionLevelEnum.NoAccess;
  SiteEvacuation: number = PermissionLevelEnum.NoAccess;
}