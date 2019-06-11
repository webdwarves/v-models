export interface IWeeklyArmingPlanBase {
  scheduleId?: number
  monday: boolean
  tuesday: boolean
  wednesday: boolean
  thursday: boolean
  friday: boolean
  saturday: boolean
  sunday: boolean
  timeFrom: string
}

export interface IDailyArmingPlanBase<DateFormat = string> {
  scheduleId?: number
  scheduleDate: DateFormat
  timeFrom: string
}

export interface IWeeklyArmingPlan extends IWeeklyArmingPlanBase {
  durationMins: number
}

export interface IDailyArmingPlan extends IDailyArmingPlanBase<string> {
  durationMins: number
}

export interface IWeeklySiteArmingPlan extends IWeeklyArmingPlan {
  siteId: number
}

export interface IDailySiteArmingPlan extends IDailyArmingPlan {
  siteId: number
}
