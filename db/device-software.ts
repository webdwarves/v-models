export class DeviceSoftware {
  softwareId?: number
  deviceClassId: number
  className: string
  deviceSubclassId: number
  softwareVersion: number
  softwareCrc: number
  minHwVersion: number
  maxHwVersion: number
  postTime?: string
  isActive: boolean
}
