export type Rarity = "COMMON" | "UNCOMMON" | "RARE" | "EPIC" | "LEGENDARY";

export type Skill =
  | "POWERFUL_STRIKES"
  | "LETHALITY"
  | "MERCILESS"
  | "RELENTLESS";

export type Case = {
  damageModifier: number;
  criticalDamageChance: number;
  criticalDamageModifier: number;
  castFrequencyModifier: number;
};
