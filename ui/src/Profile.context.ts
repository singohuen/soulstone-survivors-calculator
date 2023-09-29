import { createContext } from "react";
import { Profile } from "./lib/types";

const CaseContext = createContext<{
  profile: Profile;
  setProfile: (profile: Profile) => void;
}>({
  profile: {
    damageModifier: 0,
    criticalDamageChance: 0,
    criticalDamageModifier: 0,
    castFrequencyModifier: 0,
    areaModifier: 0,
    multiCastChance: 0,
  },
  setProfile: () => {},
});

export default CaseContext;
