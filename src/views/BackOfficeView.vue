<script setup lang="ts">
import {ref, Ref} from "vue";
import type {FrameDTO} from "@/models/dtos/FrameDTO";
import {PowerSource} from "../models/enums/frame/PowerSource";
import {BatteryState} from "../models/enums/BatteryState";
import {DetectionThreshold} from "@/models/enums/DetectionThreshold";

let frameToDecode: Ref<string> = ref("030416300100511630020044");
let frame: Ref<FrameDTO | null> = ref(null);
async function decode(): Promise<void> {
  const response = await fetch('http://localhost:8080/back-office/decode', {
    method: "POST",
    body: "frame=" + frameToDecode.value,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  frame.value = await response.json();
}
</script>



<template>
  <div :class="['text-h3', 'pa-2']">Decode frame</div>
  <v-text-field
      v-model="frameToDecode"
      label="Frame"
      density="compact"
      append-inner-icon="mdi-magnify"
      @click:append-inner="decode"
      @keydown.enter="decode"
      clearable
  ></v-text-field>

  <v-sheet
      v-if="frame !== null"
      :elevation="4"
  >
    <div :class="['text-h5', 'pa-2']">Centrale</div>
    <v-table density="compact">
      <thead>
        <tr>
          <th class="text-left">Propriété</th>
          <th class="text-left">Valeur</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Etat batterie</td>
          <td>{{ BatteryState[frame.centralStatusDTO.batteryState] }}</td>
        </tr>
        <tr>
          <td>Force OFF activée</td>
          <td>{{ frame.centralStatusDTO.offForceActivated }}</td>
        </tr>
        <tr>
          <td>En surveillance</td>
          <td>{{ frame.centralStatusDTO.onWatch }}</td>
        </tr>
        <tr>
          <td>Source alimentation</td>
          <td>{{ PowerSource[frame.centralStatusDTO.powerSource] }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-sheet>
  <br>

  <div id="tanks" v-if="frame !== null">
    <v-sheet
        v-for="(tank, key) in [frame.leftBeaconDTO, frame.rightBeaconDTO]"
        :elevation="4"
        class="tank"
    >
      <div v-if="key === 0" :class="['text-h5', 'pa-2']">Réservoir gauche</div>
      <div v-if="key === 1" :class="['text-h5', 'pa-2']">Réservoir droit</div>
      <v-table density="compact">
        <thead>
          <tr>
            <th class="text-left">Propriété</th>
            <th class="text-left">Valeur</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pile faible</td>
            <td>{{ tank.beaconStatusDTO.batteryLow }}</td>
          </tr>
          <tr>
            <td>Boîtier fermé</td>
            <td>{{ tank.beaconStatusDTO.boxClosed }}</td>
          </tr>
          <tr>
            <td>Erreur com LoRa</td>
            <td>{{ tank.beaconStatusDTO.loraComError}}</td>
          </tr>
          <tr>
            <td>Appairée</td>
            <td>{{ tank.beaconStatusDTO.paired }}</td>
          </tr>
          <tr>
            <td>Seuil détection</td>
            <td>{{ DetectionThreshold[tank.beaconStatusDTO.sensibility] }}</td>
          </tr>

          <tr>
            <td>Effraction boîtier détectée</td>
            <td>{{ tank.beaconStateDTO.boxBreakInDetected}}</td>
          </tr>
          <tr>
            <td>Effraction détectée</td>
            <td>{{ tank.beaconStateDTO.breakInDetected }}</td>
          </tr>
          <tr>
            <td>En surveillance</td>
            <td>{{ tank.beaconStateDTO.onWatch }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-sheet>
  </div>
</template>

<style scoped>
#tanks {
  display: flex;
  gap: 10px;

  .tank {
    flex-grow: 1;
  }
}


</style>