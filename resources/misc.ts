import { BaseEvent, EventType } from '../db/events'
import { MapProvider, Timezone } from '../db/miscellaneous'
import { BaseNotification } from '../db/notifications'
import { DbPermissionModel } from '../db/permissions'
import { SignalizationModes, SignalizationName } from '../db/signalizations'
import { Tag } from '../db/tags'

export class MiscModel {
  classesData: ClassData[] = [ new ClassData() ]
  eventTypes: EventType[] = [ new EventType() ]
  timezones: Timezone[] = [ new Timezone() ]
  iconImages: IconImages = new IconImages()
  tags: Tag[] = [ new Tag() ]
  signalizationEvents: BaseEvent[] = [ new BaseEvent() ]
  signalizationNames: SignalizationName[] = [ new SignalizationName() ]
  signalizationModes: SignalizationModes = {}
  permissionTypes: DbPermissionModel[] = [ new DbPermissionModel() ]
  notificationTypes: BaseNotification[] = [ new BaseNotification() ]
  mapProviders: MapProvider[] = [ new MapProvider() ]
  systemPermissionsTemplateNames: string[] = []
}

export class ClassData {
  classId?: number
  className: string = ''
  displayPriority: number = 0
  iconId?: number
}

class IconImages {
  deviceAlarm: Icon[] = [ new Icon() ]
  deviceClass: Icon[] = [ new Icon() ]
}

class Icon {
  iconId?: number
  iconName: string = ''
  iconImage: any
}
