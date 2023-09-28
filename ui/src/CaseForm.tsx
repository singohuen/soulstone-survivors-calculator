import { useForm } from "react-hook-form";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Button } from "./components/ui/button";

interface CaseFormData {
  damageModifier: number;
  criticalDamageChance: number;
  criticalDamageModifier: number;
  castFrequencyModifier: number;
  multiCastChance: number;
}

const CaseForm = () => {
  const { register, handleSubmit } = useForm<CaseFormData>({
    defaultValues: {
      damageModifier: 0,
      criticalDamageChance: 5,
      criticalDamageModifier: 200,
      castFrequencyModifier: 0,
      multiCastChance: 0,
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
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
    </form>
  );
};

export default CaseForm;
