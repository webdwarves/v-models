import { SystemIssue } from '../db/miscellaneous'
import { SiteDetails } from '../db/sites'

export interface SiteDetailsResourceModel {
  details: SiteDetails
  systemIssues: SystemIssue
}