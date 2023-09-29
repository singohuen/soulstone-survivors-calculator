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
import { H3 } from "./components/ui/typography";

const UpgradesTable = () => {
  const { profile, setProfile } = useContext(ProfileContext);

  return (
    <section>
      <H3>Upgrades</H3>
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
                label: "Damage modifier (Powerful strikes)",
                field: "damageModifier",
                skill: "POWERFUL_STRIKES",
              },
              {
                label: "Critical damage chance (Lethality)",
                field: "criticalDamageChance",
                skill: "LETHALITY",
              },
              {
                label: "Critical damage modifier (Merciless)",
                field: "criticalDamageModifier",
                skill: "MERCILESS",
              },
              {
                label: "Cast frequency modifier (Relentless)",
                field: "castFrequencyModifier",
                skill: "RELENTLESS",
              },
              {
                label: "Area modifier (Area)",
                field: "areaModifier",
                skill: "AREA",
              },
              {
                label: "Multi cast chance (Multicast)",
                field: "multiCastChance",
                skill: "MULTICAST",
              },
              {
                label: "Damage modifier (Leviathan)",
                field: "damageModifier",
                skill: "LEVIATHAN",
              },
            ] as {
              label: string;
              field: keyof Profile;
              skill: Skill;
            }[]
          ).map((row) => (
            <TableRow key={row.label}>
              <TableCell>{row.label}</TableCell>
              <TableCell>{profile[row.field]}</TableCell>
              {(
                ["COMMON", "UNCOMMON", "RARE", "EPIC", "LEGENDARY"] as Rarity[]
              ).map((rarity) => {
                const next = nextProfile(profile, row.skill, rarity);
                const increment = compareOffensiveFactor(profile, next);
                return (
                  <TableCell key={rarity}>
                    {increment || "-"}
                    {!!increment && (
                      <Button
                        type="button"
                        variant={"link"}
                        onClick={() => setProfile(next)}
                      >
                        Apply
                      </Button>
                    )}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default UpgradesTable;