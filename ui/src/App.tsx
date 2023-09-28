import { useState } from "react";
import ProfileContext from "./Profile.context";
import ProfileForm from "./ProfileForm";
import { Profile } from "./lib/types";
import StatsTable from "./StatsTable";

const App = () => {
  const [profile, setProfile] = useState<Profile>({
    damageModifier: 0,
    criticalDamageChance: 5,
    criticalDamageModifier: 200,
    castFrequencyModifier: 0,
    areaModifier: 0,
    multiCastChance: 0,
  });

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      <section className="w-3/4 mx-auto p-4">
        <ProfileForm />
      </section>

      <StatsTable />
    </ProfileContext.Provider>
  );
};

export default App;
