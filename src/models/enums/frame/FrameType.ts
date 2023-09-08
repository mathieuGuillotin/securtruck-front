export enum FrameType {
    KEA= "Keep alive",
    CHE = "Changement d'état",
    NIB = "Niveau batterie",
    ESA = "Mise en service automatique",
    HSA = "Mise hors service automatique",
    ESM = "Mise en service manuelle",
    HSM = "Mise hors service manuelle",
    ACQ = "Acquittement alarme",
    ECL = "Erreur de communication LoRa",
    RCL = "Retour de communication LoRa",
    INB = "Intrusion boîtier (FDC)",
    INT = "Intrusion (Choc)"
}