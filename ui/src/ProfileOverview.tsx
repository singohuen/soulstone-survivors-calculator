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

const ProfileOverview = () => {
  const { profile } = useContext(ProfileContext);

  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="grid grid-cols-2">
        <div>Damage modifier</div>
        <div>{profile.damageModifier}</div>

        <div>Critical damage chance</div>
        <div>{profile.criticalDamageChance}</div>

        <div>Critical damage modifier</div>
        <div>{profile.criticalDamageModifier}</div>

        <div>Cast frequency modifier</div>
        <div>{profile.castFrequencyModifier}</div>

        <div>Area modifier</div>
        <div>{profile.areaModifier}</div>

        <div>Multi cast chance</div>
        <div>{profile.multiCastChance}</div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <Button variant={"link"}>Edit</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-8">Update profile</DialogTitle>

            <ProfileForm onSuccess={() => setOpen(false)} />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProfileOverview;
