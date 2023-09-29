import { useState } from "react";
import ProfileContext, { DEFAULT_PROFILE } from "./Profile.context";
import { Profile } from "./lib/types";
import UpgradesTable from "./UpgradesTable";
import ProfileOverview from "./ProfileOverview";

const App = () => {
  const [profile, setProfile] = useState<Profile>(DEFAULT_PROFILE);

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      <main className="container pt-8">
        <ProfileOverview />

        <UpgradesTable />
      </main>
    </ProfileContext.Provider>
  );
};

export default App;
