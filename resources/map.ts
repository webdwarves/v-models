import { Grouping } from '../db/grouping';

export class MapGrouping extends Grouping {
  devices: MapGroupingDevice[] = [];
  structures: MapGroupingStructure[] = [];
}

export class MapGroupingDevice {
  deviceId: number;
  deviceName: string;
}

export class MapGroupingStructure {
  structureId: number;
  structureName: string;
}
