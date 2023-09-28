import { useForm } from "react-hook-form";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Button } from "./components/ui/button";
import { Profile } from "./lib/types";
import { useContext } from "react";
import ProfileContext from "./Profile.context";

interface ProfileFormData extends Profile {}

const ProfileForm = () => {
  const { profile, setProfile } = useContext(ProfileContext);

  const { register, handleSubmit, reset } = useForm<ProfileFormData>({
    defaultValues: profile,
  });

  const onSubmit = handleSubmit((data) => {
    setProfile(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <div>
        <Label htmlFor="damageModifier">Damage modifier</Label>
        <Input
          id="damageModifier"
          {...register("damageModifier", { valueAsNumber: true })}
        />
      </div>

      <div>
        <Label htmlFor="criticalDamageChance">Critical damage chance</Label>
        <Input
          id="criticalDamageChance"
          {...register("criticalDamageChance", { valueAsNumber: true })}
        />
      </div>

      <div>
        <Label htmlFor="criticalDamageModifier">Critical damage modifier</Label>
        <Input
          id="criticalDamageModifier"
          {...register("criticalDamageModifier", { valueAsNumber: true })}
        />
      </div>

      <div>
        <Label htmlFor="castFrequencyModifier">Cast frequency modifier</Label>
        <Input
          id="castFrequencyModifier"
          {...register("castFrequencyModifier", { valueAsNumber: true })}
        />
      </div>

      <div>
        <Label htmlFor="multiCastChance">Multi cast chance</Label>
        <Input
          id="multiCastChance"
          {...register("multiCastChance", { valueAsNumber: true })}
        />
      </div>

      <Button>Save</Button>

      <Button variant={"outline"} type="button" onClick={() => reset()}>
        Reset
      </Button>
    </form>
  );
};

export default ProfileForm;
