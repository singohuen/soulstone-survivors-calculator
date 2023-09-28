export type Rarity = "COMMON" | "UNCOMMON" | "RARE" | "EPIC" | "LEGENDARY";

export type Skill =
  | "POWERFUL_STRIKES"
  | "LETHALITY"
  | "MERCILESS"
  | "RELENTLESS"
  | "AREA"
  | "MULTICAST";

export type Profile = {
  damageModifier: number;
  criticalDamageChance: number;
  criticalDamageModifier: number;
  castFrequencyModifier: number;
  areaModifier: number;
  multiCastChance: number;
};
