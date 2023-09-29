import { useState } from "react";
import ProfileContext, { DEFAULT_PROFILE } from "./Profile.context";
import { Profile } from "./lib/types";
import UpgradesTable from "./UpgradesTable";
import ProfileOverview from "./ProfileOverview";
import { H1 } from "./components/ui/typography";

const App = () => {
  const [profile, setProfile] = useState<Profile>(DEFAULT_PROFILE);

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      <header className="container pt-8">
        <H1>Soulstone Survivors Calculator</H1>
      </header>

      <main className="container pt-8">
        <ProfileOverview />

        <UpgradesTable />
      </main>
    </ProfileContext.Provider>
  );
};

export default App;
