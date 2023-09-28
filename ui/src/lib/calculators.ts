import SkillValue from "./skill-value";
import { Profile, Rarity, Skill } from "./types";

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

export function averageCasts(multiCastChance: number): number {
  const ROUND = 5;
  const DECAY_RATE = 0.4;

  let chance = 0;

  for (let i = 1; i <= ROUND; i++) {
    let roundChance = 100;
    if (i > 1) {
      roundChance = multiCastChance * Math.pow(DECAY_RATE, i - 2);
    }
    chance += Math.min(roundChance, 100);
  }

  return Math.round(chance) / 100;
}

export function offensiveFactor(
  damageModifier: number,
  criticalDamageChance: number,
  criticalDamageModifier: number,
  castFrequencyModifier: number,
  multiCastChance: number
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

  const cooldown = BASE_COOLDOWN / (100 + castFrequencyModifier);

  const casts = averageCasts(multiCastChance);

  return (damage * casts) / cooldown;
}

export function compareOffensiveFactor(
  baseProfile: Profile,
  newProfile: Profile
) {
  const baseOffensiveFactor = offensiveFactor(
    baseProfile.damageModifier,
    baseProfile.criticalDamageChance,
    baseProfile.criticalDamageModifier,
    baseProfile.castFrequencyModifier,
    baseProfile.multiCastChance
  );
  const newOffensiveFactor = offensiveFactor(
    newProfile.damageModifier,
    newProfile.criticalDamageChance,
    newProfile.criticalDamageModifier,
    newProfile.castFrequencyModifier,
    newProfile.multiCastChance
  );

  return Math.round(
    ((newOffensiveFactor - baseOffensiveFactor) / baseOffensiveFactor) * 1000
  );
}

export function nextProfile(
  baseProfile: Profile,
  skill: Skill,
  rarity: Rarity
): Profile {
  const newProfile = { ...baseProfile };
  switch (skill) {
    case "POWERFUL_STRIKES":
      newProfile.damageModifier += SkillValue[skill][rarity] ?? 0;
      break;
    case "LETHALITY":
      newProfile.criticalDamageChance += SkillValue[skill][rarity] ?? 0;
      break;
    case "MERCILESS":
      newProfile.criticalDamageModifier += SkillValue[skill][rarity] ?? 0;
      break;
    case "RELENTLESS":
      newProfile.castFrequencyModifier += SkillValue[skill][rarity] ?? 0;
      break;
    case "MULTICAST":
      newProfile.multiCastChance += SkillValue[skill][rarity] ?? 0;
      break;
  }
  return newProfile;
}
