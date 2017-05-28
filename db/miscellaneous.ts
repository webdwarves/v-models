export class Timezone {
  timezoneId: number;
  timezoneName: string;
  timezoneAbbrev: string;
  utcOffset: UtcOffset;
  isDst: boolean;
}

class UtcOffset {
  hours: number;
}
