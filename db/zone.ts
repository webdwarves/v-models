export class Zone<PolygonType = string> {
  zoneId: number
  zoneName: string
  deviceMode: number
  polygon: PolygonType
  isArmed: boolean
}
