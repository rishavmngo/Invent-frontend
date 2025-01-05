import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormFields } from "@/types/inventory.types";

type InventoryPricingFormProps = {
  registerAction: UseFormRegister<FormFields>;
  errors: FieldErrors<FormFields>;
};
export default function InventoryPricingForm({
  registerAction,
  errors,
}: InventoryPricingFormProps) {
  return (
    <>
      <div className="mt-2">
        <Label htmlFor="sale_price">Sale Price</Label>
        <Input
          {...registerAction("sell_price")}
          id="sale_price"
          placeholder="Sell Price"
        />
        {errors.sell_price && (
          <div className="text-red-500">{errors.sell_price.message}</div>
        )}
      </div>
      <div className="mt-2">
        <Label htmlFor="purchase_price">Purchase Price</Label>
        <Input
          {...registerAction("purchase_price")}
          id="purchase_price"
          placeholder="Purchase Price"
        />
        {errors.purchase_price && (
          <div className="text-red-500">{errors.purchase_price.message}</div>
        )}
      </div>
    </>
  );
}
