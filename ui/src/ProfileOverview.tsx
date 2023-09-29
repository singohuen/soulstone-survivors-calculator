import { useContext, useState } from "react";
import ProfileContext from "./Profile.context";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { Button } from "./components/ui/button";
import ProfileForm from "./ProfileForm";
import { Card, CardContent } from "./components/ui/card";
import { H3, Large, Muted } from "./components/ui/typography";

const ProfileOverview = () => {
  const { profile } = useContext(ProfileContext);

  const [open, setOpen] = useState(false);

  return (
    <section className="mb-16">
      <H3>
        Profile
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant={"link"} className="ml-2 mb-2">
              Update
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="mb-8">Update profile</DialogTitle>

              <ProfileForm onSuccess={() => setOpen(false)} />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </H3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {(
          [
            {
              label: "Damage modifier",
              value: profile.damageModifier + "%",
            },
            {
              label: "Critical damage chance",
              value: profile.criticalDamageChance + "%",
            },
            {
              label: "Critical damage modifier",
              value: profile.criticalDamageModifier + "%",
            },
            {
              label: "Cast frequency modifier",
              value: profile.castFrequencyModifier + "%",
            },
            {
              label: "Area modifier",
              value: profile.areaModifier + "%",
            },
            {
              label: "Multi cast chance",
              value: profile.multiCastChance + "%",
            },
          ] as {
            label: string;
            value: string;
          }[]
        ).map((stat) => (
          <Card key={stat.label}>
            <CardContent className="mt-8">
              <Muted className="mb-2">{stat.label}</Muted>
              <Large>{stat.value}</Large>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProfileOverview;
