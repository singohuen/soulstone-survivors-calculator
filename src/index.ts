import SkillValue from "./skill-value";
import { Case, Rarity, Skill } from "./types";

const BASE_DAMAGE = 500;
const BASE_COOLDOWN = 3000;

export function maxCriticalTier(criticalDamageChance: number): number {
  let tier = 0;
  while (criticalDamageChance > 0) {
    tier++;
    criticalDamageChance -= 100;
  }
  return tier;
}

export function adjustedCriticalDamageChance(
  criticalDamageChance: number
): number {
  let adjustedChance = criticalDamageChance;
  while (adjustedChance > 100) {
    adjustedChance -= 100;
  }
  return adjustedChance;
}

export function offensiveFactor(
  damageModifier: number,
  criticalDamageChance: number,
  criticalDamageModifier: number
): number {
  const maxTier = maxCriticalTier(criticalDamageChance);
  const adjustedChance = adjustedCriticalDamageChance(criticalDamageChance);

  let damage = 0;
  if (maxTier > 1) {
    damage =
      BASE_DAMAGE * (criticalDamageModifier * maxTier) * adjustedChance +
      BASE_DAMAGE *
        (criticalDamageModifier * (maxTier - 1)) *
        (100 - adjustedChance);
  } else {
    damage =
      BASE_DAMAGE * criticalDamageModifier * adjustedChance +
      BASE_DAMAGE * (100 + damageModifier) * (100 - adjustedChance);
  }

  return damage / BASE_COOLDOWN;
}

export function compareOffensiveFactor(baseCase: Case, newCase: Case) {
  const baseOffensiveFactor = offensiveFactor(
    baseCase.damageModifier,
    baseCase.criticalDamageChance,
    baseCase.criticalDamageModifier
  );
  const newOffensiveFactor = offensiveFactor(
    newCase.damageModifier,
    newCase.criticalDamageChance,
    newCase.criticalDamageModifier
  );

  return Math.round(
    ((newOffensiveFactor - baseOffensiveFactor) / baseOffensiveFactor) * 1000
  );
}

export function nextCase(baseCase: Case, skill: Skill, rarity: Rarity): Case {
  const newCase = { ...baseCase };
  switch (skill) {
    case "POWERFUL_STRIKES":
      newCase.damageModifier += SkillValue[skill][rarity] ?? 0;
      break;
    case "LETHALITY":
      newCase.criticalDamageChance += SkillValue[skill][rarity] ?? 0;
      break;
    case "MERCILESS":
      newCase.criticalDamageModifier += SkillValue[skill][rarity] ?? 0;
      break;
  }
  return newCase;
}
