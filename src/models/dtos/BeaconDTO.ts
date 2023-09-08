import type {BeaconStatusDTO} from "@/models/dtos/BeaconStatusDTO";
import type {BeaconStateDTO} from "@/models/dtos/BeaconStateDTO";

export type BeaconDTO = {
    beaconStatusDTO: BeaconStatusDTO;
    beaconStateDTO: BeaconStateDTO;
}