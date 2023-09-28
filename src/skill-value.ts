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
};

export default SkillValue;
