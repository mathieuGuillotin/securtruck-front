import type {PowerSource} from "@/models/enums/frame/PowerSource";
import type {BatteryState} from "@/models/enums/BatteryState";

export type CentralStatusDTO = {
    batteryState: BatteryState;
    offForceActivated: boolean;
    onWatch: boolean;
    powerSource: PowerSource;
}