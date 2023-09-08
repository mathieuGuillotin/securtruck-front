import type {PowerSource} from "@/models/enums/frame/PowerSource";
import type {BatteryState} from "@/models/enums/BatteryState";
import type {FrameType} from "@/models/enums/frame/FrameType";
import type {CentralStatusDTO} from "@/models/dtos/CentralStatusDTO";
import type {BeaconDTO} from "@/models/dtos/BeaconDTO";

export type FrameDTO = {
    frameType: FrameType;
    centralStatusDTO: CentralStatusDTO;
    rightBeaconDTO: BeaconDTO;
    leftBeaconDTO: BeaconDTO;
}