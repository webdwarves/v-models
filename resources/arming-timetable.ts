import { IDailyArmingPlan, IDailyArmingPlanBase, IDailySiteArmingPlan, IWeeklyArmingPlan, IWeeklyArmingPlanBase, IWeeklySiteArmingPlan } from '../db/arming-plan'

export interface IArmingTimetableBase<T = string,
  Daily extends IDailyArmingPlanBase<T> = IDailyArmingPlanBase<T>,
  Weekly extends IWeeklyArmingPlanBase = IWeeklyArmingPlanBase> {
  dailyPlans: Daily[]
  weeklyPlans: Weekly[]
}

export interface IArmingTimetable
  extends IArmingTimetableBase<string, IDailyArmingPlan, IWeeklyArmingPlan> {
}

export interface ISiteArmingTimetable
  extends IArmingTimetableBase<string, IDailySiteArmingPlan, IWeeklySiteArmingPlan> {
}
