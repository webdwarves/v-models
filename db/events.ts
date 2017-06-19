export class BaseEvent {
  eventId: number;
  eventName: string;
}

export class EventType {
  eventTypeId: number;
  eventTypeName: string;
  severityLevel: SeverityLevelEnum;
  deviceClassId: number;
  isTypeAlarm: boolean;
  iconId: number;
}
export enum SeverityLevelEnum {
  alarm = 0,
  warning = 1,
  info = 2
}
