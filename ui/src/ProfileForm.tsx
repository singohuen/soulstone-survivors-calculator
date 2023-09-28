import { useForm } from "react-hook-form";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Button } from "./components/ui/button";
import { Profile } from "./lib/types";
import { useContext, useEffect } from "react";
import ProfileContext from "./Profile.context";
import { H3 } from "./components/ui/typography";

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
      <H3>Profile</H3>
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
        <div key={field.field} className="grid grid-cols-2 items-center">
          <Label htmlFor={field.field}>{field.label}</Label>
          <Input
            id={field.field}
            {...register(field.field, { valueAsNumber: true })}
          />
        </div>
      ))}

      <Button className="w-full mt-8">Save</Button>
    </form>
  );
};

export default ProfileForm;
