import { useForm } from "react-hook-form";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Button } from "./components/ui/button";
import { Profile } from "./lib/types";
import { useContext, useEffect } from "react";
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

  useEffect(() => {
    reset(profile);
  }, [profile, reset]);

  return (
    <form onSubmit={onSubmit}>
      {(
        [
          {
            label: "Damage modifier",
            field: "damageModifier",
          },
          {
            label: "Critical damage chance",
            field: "criticalDamageChance",
          },
          {
            label: "Critical damage modifier",
            field: "criticalDamageModifier",
          },
          {
            label: "Cast frequency modifier",
            field: "castFrequencyModifier",
          },
          {
            label: "Area modifier",
            field: "areaModifier",
          },
          {
            label: "Multi cast chance",
            field: "multiCastChance",
          },
        ] as { label: string; field: keyof ProfileFormData }[]
      ).map((field) => (
        <div key={field.field}>
          <Label htmlFor={field.field}>{field.label}</Label>
          <Input
            id={field.field}
            {...register(field.field, { valueAsNumber: true })}
          />
        </div>
      ))}

      <Button>Save</Button>
    </form>
  );
};

export default ProfileForm;
