import { useForm } from "react-hook-form";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Button } from "./components/ui/button";
import { Profile } from "./lib/types";
import { useContext, useEffect, useMemo } from "react";
import ProfileContext from "./Profile.context";

interface ProfileFormData extends Profile {}

interface ProfileFormProps {
  onSuccess?: () => void;
}

const ProfileForm = ({ onSuccess }: ProfileFormProps) => {
  const { profile, setProfile } = useContext(ProfileContext);

  const { register, handleSubmit, reset } = useForm<ProfileFormData>({
    defaultValues: profile,
  });

  const onSubmit = handleSubmit((data) => {
    setProfile(data);
    onSuccess && onSuccess();
  });

  useEffect(() => {
    reset(profile);
  }, [profile, reset]);

  const fields = useMemo<{ label: string; field: keyof ProfileFormData }[]>(
    () => [
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
    ],
    []
  );

  return (
    <form onSubmit={onSubmit}>
      {fields.map((field) => (
        <div key={field.field} className="grid grid-cols-2 items-center mb-2">
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
