export class BaseEvent {
  eventId: number;
  eventName: string;
}

export class EventType {
  eventTypeId: number;
  eventTypeName: string;
  severityLevel: number;
  deviceClassId: number;
  isTypeAlarm: boolean;
  iconId: number;
}
