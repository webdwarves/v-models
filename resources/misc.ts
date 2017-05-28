import { BaseEvent, EventType } from 'models/db/events';
import { Tag } from 'models/db/tags';
import { SignalizationName } from 'models/db/signalizations';
import { DbPermissionModel } from 'models/db/permissions';
import { BaseNotification } from 'models/db/notifications';
import { Timezone } from 'models/db/miscellaneous';

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
