import { useContext } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import { Button } from "./components/ui/button";
import ProfileContext from "./Profile.context";
import { compareOffensiveFactor, nextProfile } from "./lib/calculators";
import { Rarity, Skill } from "./lib/types";
import common from "./assets/rarity-frames/common.webp";
import uncommon from "./assets/rarity-frames/uncommon.webp";
import rare from "./assets/rarity-frames/rare.webp";
import epic from "./assets/rarity-frames/epic.webp";
import legendary from "./assets/rarity-frames/legendary.webp";
import area from "./assets/skills/area.webp";
import lethality from "./assets/skills/lethality.webp";
import leviathan from "./assets/skills/leviathan.webp";
import merciless from "./assets/skills/merciless.webp";
import multicast from "./assets/skills/multicast.webp";
import powerfulStrikes from "./assets/skills/powerful-strikes.webp";
import relentless from "./assets/skills/relentless.webp";
import { MoveUp } from "lucide-react";

const UpgradesTable = () => {
  const { profile, setProfile } = useContext(ProfileContext);

  return (
    <section>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Upgrades</TableHead>
            {(
              [
                {
                  label: "Common",
                  imgSrc: common,
                },
                {
                  label: "Uncommon",
                  imgSrc: uncommon,
                },
                {
                  label: "Rare",
                  imgSrc: rare,
                },
                {
                  label: "Epic",
                  imgSrc: epic,
                },
                {
                  label: "Legendary",
                  imgSrc: legendary,
                },
              ] as {
                label: string;
                imgSrc: string;
              }[]
            ).map((rarity) => (
              <TableHead key={rarity.label}>
                <div className="flex flex-col items-center">
                  <img
                    src={rarity.imgSrc}
                    className="w-12"
                    alt={rarity.label}
                  />
                  <div>{rarity.label}</div>
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {(
            [
              {
                label: "Powerful strikes",
                skill: "POWERFUL_STRIKES",
                imgSrc: powerfulStrikes,
              },
              {
                label: "Lethality",
                skill: "LETHALITY",
                imgSrc: lethality,
              },
              {
                label: "Merciless",
                skill: "MERCILESS",
                imgSrc: merciless,
              },
              {
                label: "Relentless",
                skill: "RELENTLESS",
                imgSrc: relentless,
              },
              {
                label: "Area",
                skill: "AREA",
                imgSrc: area,
              },
              {
                label: "Multicast",
                skill: "MULTICAST",
                imgSrc: multicast,
              },
              {
                label: "Leviathan",
                skill: "LEVIATHAN",
                imgSrc: leviathan,
              },
            ] as {
              label: string;
              skill: Skill;
              imgSrc: string;
            }[]
          ).map((upgrade) => (
            <TableRow key={upgrade.label}>
              <TableCell className="flex flex-col items-center">
                <img
                  src={upgrade.imgSrc}
                  className="w-16"
                  alt={upgrade.label}
                />
                <div>{upgrade.label}</div>
              </TableCell>
              {(
                ["COMMON", "UNCOMMON", "RARE", "EPIC", "LEGENDARY"] as Rarity[]
              ).map((rarity) => {
                const next = nextProfile(profile, upgrade.skill, rarity);
                const increment = compareOffensiveFactor(profile, next);
                return (
                  <TableCell key={rarity}>
                    <div className="flex flex-col items-center">
                      {increment ? (
                        <>
                          <div>
                            {increment}
                            <MoveUp className="w-4 inline text-green-600" />
                          </div>

                          <Button
                            type="button"
                            variant={"link"}
                            onClick={() => setProfile(next)}
                          >
                            Pick
                          </Button>
                        </>
                      ) : (
                        <div>—</div>
                      )}
                    </div>
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
