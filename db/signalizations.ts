export class SignalizationName {
  sigDeviceId?: number;
  sigDeviceName: string = '';
}

export class SignalizationTemplate extends SignalizationName {
  signalizationTemplateId?: number;
  eventId: number;
  eventName: string = '';
  configValue: number = 0;
}

export class SignalizationModes {
  [key: string]: string[]
}

class SignalizationDeviceConfiguration {
  [sigDeviceName: string]: string
}

export class UserSignalizationMatrix {
  [eventName: string]: SignalizationDeviceConfiguration
}
