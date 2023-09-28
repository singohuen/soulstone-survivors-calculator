import { useState } from "react";
import ProfileContext from "./Profile.context";
import ProfileForm from "./ProfileForm";
import { Profile } from "./lib/types";

const App = () => {
  const [profile, setProfile] = useState<Profile>({
    damageModifier: 0,
    criticalDamageChance: 5,
    criticalDamageModifier: 200,
    castFrequencyModifier: 0,
    multiCastChance: 0,
  });
  console.log("profile", profile);

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      <ProfileForm />
    </ProfileContext.Provider>
  );
};

export default App;
