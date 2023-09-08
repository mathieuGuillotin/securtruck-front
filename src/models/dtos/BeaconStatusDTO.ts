import type {DetectionThreshold} from "@/models/enums/DetectionThreshold";

export type BeaconStatusDTO = {
    batteryLow: boolean;
    boxClosed: boolean;
    loraComError: boolean;
    paired: boolean;
    sensibility: DetectionThreshold;
}