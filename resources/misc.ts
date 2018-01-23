import { BaseEvent, EventType } from '../db/events';
import { Tag } from '../db/tags';
import { SignalizationName, SignalizationModes } from '../db/signalizations';
import { DbPermissionModel } from '../db/permissions';
import { BaseNotification } from '../db/notifications';
import { Timezone, MapProvider } from '../db/miscellaneous';

export class MiscModel {
  classesData: ClassData[] = [new ClassData()];
  eventTypes: EventType[] = [new EventType()];
  timezones: Timezone[] = [new Timezone()];
  iconImages: IconImages = new IconImages();
  tags: Tag[] = [new Tag()];
  signalizationEvents: BaseEvent[] = [new BaseEvent()];
  signalizationNames: SignalizationName[] = [new SignalizationName()];
  signalizationModes: SignalizationModes = {};
  permissionTypes: DbPermissionModel[] = [new DbPermissionModel()];
  notificationTypes: BaseNotification[] = [new BaseNotification()];
  mapProviders: MapProvider[] = [new MapProvider()];
  systemPermissionsTemplateNames: string[] = [];
}

export class ClassData {
  classId?: number;
  className: string = '';
  displayPriority: number = 0;
  iconId?: number;
}

class IconImages {
  deviceAlarm: Icon[] = [new Icon()];
  deviceClass: Icon[] = [new Icon()];
}

class Icon {
  iconId?: number;
  iconName: string = '';
  iconImage: any;
}
