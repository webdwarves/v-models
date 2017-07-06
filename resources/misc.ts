import { BaseEvent, EventType } from '../db/events';
import { Tag } from '../db/tags';
import { SignalizationName } from '../db/signalizations';
import { DbPermissionModel } from '../db/permissions';
import { BaseNotification } from '../db/notifications';
import { Timezone, MapProvider } from '../db/miscellaneous';

export class MiscModel {
  classesData: ClassData[] = [new ClassData()];
  eventTypes: EventType[] = [new EventType()];
  timezones: Timezone[] = [new Timezone()];
  iconImages: iconImages = new iconImages();
  tags: Tag[] = [new Tag()];
  signalizationEvents: BaseEvent[] = [new BaseEvent()];
  signalizationNames: SignalizationName[] = [new SignalizationName()];
  permissionTypes: DbPermissionModel[] = [new DbPermissionModel()];
  notificationTypes: BaseNotification[] = [new BaseNotification()];
  mapProviders: MapProvider[] = [new MapProvider()];
}

class ClassData {
  classId?: number;
  className: string = '';
  displayPriority: number = 0;
  iconId?: number;
}

class iconImages {
  deviceAlarm: Icon[] = [new Icon()];
  deviceClass: Icon[] = [new Icon()];
}

class Icon {
  iconId?: number;
  iconName: string = '';
  iconImage: any;
}
