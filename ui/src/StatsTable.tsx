import { useContext } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import ProfileContext from "./Profile.context";
import { compareOffensiveFactor, nextProfile } from "./lib/calculators";
import { Profile, Rarity, Skill } from "./lib/types";
import common from "./assets/rarity-frames/common.webp";
import uncommon from "./assets/rarity-frames/uncommon.webp";
import rare from "./assets/rarity-frames/rare.webp";
import epic from "./assets/rarity-frames/epic.webp";
import legendary from "./assets/rarity-frames/legendary.webp";
import { Button } from "./components/ui/button";

const StatsTable = () => {
  const { profile, setProfile } = useContext(ProfileContext);

  return (
    <section>
      <h2>Stats</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Attribute</TableHead>
            <TableHead>Current</TableHead>
            {[common, uncommon, rare, epic, legendary].map((rarity) => (
              <TableHead key={rarity}>
                <img src={rarity} className="w-12" />
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {(
            [
              {
                label: "Damage modifier",
                field: "damageModifier",
                skill: "POWERFUL_STRIKES",
              },
              {
                label: "Critical damage chance",
                field: "criticalDamageChance",
                skill: "LETHALITY",
              },
              {
                label: "Critical damage modifier",
                field: "criticalDamageModifier",
                skill: "MERCILESS",
              },
              {
                label: "Cast frequency modifier",
                field: "castFrequencyModifier",
                skill: "RELENTLESS",
              },
              {
                label: "Multi cast chance",
                field: "multiCastChance",
                skill: "MULTICAST",
              },
            ] as {
              label: string;
              field: keyof Profile;
              skill: Skill;
            }[]
          ).map((row) => (
            <TableRow key={row.field}>
              <TableCell>{row.label}</TableCell>
              <TableCell>{profile[row.field]}</TableCell>
              {(
                ["COMMON", "UNCOMMON", "RARE", "EPIC", "LEGENDARY"] as Rarity[]
              ).map((rarity) => (
                <TableCell key={rarity}>
                  {compareOffensiveFactor(
                    profile,
                    nextProfile(profile, row.skill, rarity)
                  ) || "-"}
                  <Button
                    type="button"
                    variant={"link"}
                    onClick={() =>
                      setProfile(nextProfile(profile, row.skill, rarity))
                    }
                  >
                    Apply
                  </Button>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default StatsTable;
