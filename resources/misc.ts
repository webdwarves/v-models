import { BaseEvent, EventType } from '../db/events';
import { Tag } from '../db/tags';
import { SignalizationName } from '../db/signalizations';
import { DbPermissionModel } from '../db/permissions';
import { BaseNotification } from '../db/notifications';
import { Timezone } from '../db/miscellaneous';

export class MiscModel {
  classesData: ClassData[] = [];
  eventTypes: EventType[] = [];
  timezones: Timezone[] = [];
  iconUrls: IconUrls = new IconUrls();
  tags: Tag[] = [];
  signalizationEvents: BaseEvent[] = [];
  signalizationNames: SignalizationName[] = [];
  premissionTypes: DbPermissionModel[] = [];
  notificationTypes: BaseNotification[] = [];
}

class ClassData {
  classId?: number;
  className: string = '';
  displayPriority: number = 0;
  iconId?: number;
}

class IconUrls {
  deviceAlarm: Icon[] = [];
  deviceClass: Icon[] = [];
}

class Icon {
  iconId?: number;
  iconName: string;
  iconImage: any;
}
