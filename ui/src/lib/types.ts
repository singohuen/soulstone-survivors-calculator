export type Rarity = "COMMON" | "UNCOMMON" | "RARE" | "EPIC" | "LEGENDARY";

export type Skill =
  | "POWERFUL_STRIKES"
  | "LETHALITY"
  | "MERCILESS"
  | "RELENTLESS"
  | "MULTICAST";

export type Profile = {
  damageModifier: number;
  criticalDamageChance: number;
  criticalDamageModifier: number;
  castFrequencyModifier: number;
  multiCastChance: number;
};
