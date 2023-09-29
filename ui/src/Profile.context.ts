import { createContext } from "react";
import { Profile } from "./lib/types";

export const DEFAULT_PROFILE = {
  damageModifier: 0,
  criticalDamageChance: 5,
  criticalDamageModifier: 200,
  castFrequencyModifier: 0,
  areaModifier: 0,
  multiCastChance: 0,
};

const CaseContext = createContext<{
  profile: Profile;
  setProfile: (profile: Profile) => void;
}>({
  profile: DEFAULT_PROFILE,
  setProfile: () => {},
});

export default CaseContext;
