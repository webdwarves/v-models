import { Grouping } from '../db/grouping';

class MapGrouping extends Grouping {
  devices: MapGroupingDevice[] = [];
  structures: MapGroupingStructure[] = [];
}

class MapGroupingDevice {
  deviceId: number;
  deviceName: string;
}

class MapGroupingStructure {
  structureId: number;
  structureName: string;
}
