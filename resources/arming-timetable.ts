import { IDailyArmingPlan, IDailyArmingPlanBase, IDailySiteArmingPlan, IWeeklyArmingPlan, IWeeklyArmingPlanBase, IWeeklySiteArmingPlan } from '../db/arming-plan'

export interface IArmingTimetableBase<Daily extends IDailyArmingPlanBase<T> = IDailyArmingPlanBase<T>,
  Weekly extends IWeeklyArmingPlanBase = IWeeklyArmingPlanBase,
  T = string> {
  dailyPlans: Daily[]
  weeklyPlans: Weekly[]
}

export interface IArmingTimetable
  extends IArmingTimetableBase<IDailyArmingPlan, IWeeklyArmingPlan> {
}

export interface ISiteArmingTimetable
  extends IArmingTimetableBase<IDailySiteArmingPlan, IWeeklySiteArmingPlan> {
}
