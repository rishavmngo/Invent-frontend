import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormFields } from "@/types/inventory.types";

type InventoryItemDetailsFormProps = {
  registerAction: UseFormRegister<FormFields>;
  errors: FieldErrors<FormFields>;
};
export default function InvetoryItemDetailsForm({
  registerAction,
  errors,
}: InventoryItemDetailsFormProps) {
  return (
    <>
      <div className="my-2">
        <Label htmlFor="name">Item name</Label>
        <Input
          {...registerAction("name")}
          type="text"
          id="name"
          placeholder="e.g: Electric Kettle"
        />
        {errors.name && (
          <div className="text-red-500">{errors.name.message}</div>
        )}
      </div>
    </>
  );
}
