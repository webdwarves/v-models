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

export class Notification extends BaseNotification {
  deviceId: number;
  deviceName: string;
  eventTypeId: number;
  eventTypeName: string;
  eventTime: string;
  latitude: number;
  longitude: number;
  sendToString: string;
  notificationText: string;
  sendSuccess: boolean;
  timeStamp: string;
}

export class UserNotifications {
  [userId: string]: Notification[];
}