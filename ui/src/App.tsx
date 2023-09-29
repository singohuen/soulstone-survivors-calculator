import { useState } from "react";
import ProfileContext from "./Profile.context";
import { Profile } from "./lib/types";
import UpgradesTable from "./UpgradesTable";
import ProfileOverview from "./ProfileOverview";

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
      <main className="container">
        <section className="w-3/4 mx-auto p-4">
          <ProfileOverview />
        </section>

        <UpgradesTable />
      </main>
    </ProfileContext.Provider>
  );
};

export default App;
