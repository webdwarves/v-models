import { getEnumMembers } from '../utils/functions';

export enum PermissionTypeNameEnum {
  NoAccess = 0,
  ReadOnlyAccess = 1,
  ReadAndWrite = 2
}

export class SitePermissions {
  static permissionTypes = getEnumMembers(PermissionTypeNameEnum);
  SiteConfiguration: number = PermissionTypeNameEnum.NoAccess;
  ManageDevices: number = PermissionTypeNameEnum.NoAccess;
  Structures: number = PermissionTypeNameEnum.NoAccess;
  Zones: number = PermissionTypeNameEnum.NoAccess;
  AlarmHandling: number = PermissionTypeNameEnum.NoAccess;
  SignalizationEditor: number = PermissionTypeNameEnum.NoAccess;
  NotificationEditor: number = PermissionTypeNameEnum.NoAccess;
  SiteEvacuation: number = PermissionTypeNameEnum.NoAccess;
}