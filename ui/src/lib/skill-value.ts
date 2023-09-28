import { Rarity, Skill } from "./types";

const SkillValue: Record<Skill, Record<Rarity, number | undefined>> = {
  POWERFUL_STRIKES: {
    COMMON: 5,
    UNCOMMON: 10,
    RARE: 15,
    EPIC: undefined,
    LEGENDARY: undefined,
  },
  LETHALITY: {
    COMMON: 5,
    UNCOMMON: 10,
    RARE: 15,
    EPIC: undefined,
    LEGENDARY: undefined,
  },
  MERCILESS: {
    COMMON: 12,
    UNCOMMON: 24,
    RARE: 36,
    EPIC: undefined,
    LEGENDARY: undefined,
  },
  RELENTLESS: {
    COMMON: 5,
    UNCOMMON: 10,
    RARE: 15,
    EPIC: 20,
    LEGENDARY: undefined,
  },
  AREA: {
    COMMON: 5,
    UNCOMMON: 10,
    RARE: 15,
    EPIC: 20,
    LEGENDARY: undefined,
  },
  MULTICAST: {
    COMMON: 4,
    UNCOMMON: 8,
    RARE: 12,
    EPIC: 16,
    LEGENDARY: 20,
  },
  LEVIATHAN: {
    COMMON: 10,
    UNCOMMON: 20,
    RARE: 30,
    EPIC: undefined,
    LEGENDARY: undefined,
  },
};

export default SkillValue;
