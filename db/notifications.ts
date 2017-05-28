export class BaseNotification {
  notificationTypeId: number;
  notificationTypeName: string;
}

export class NotificationTemplate extends BaseNotification {
  notificationTemplateId: number;
  eventTypeId: number;
  eventTypeName: string;
  enabled: boolean;
}
