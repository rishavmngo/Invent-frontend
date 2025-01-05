import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormFields } from "@/types/inventory.types";

type InventoryStockFormProps = {
  registerAction: UseFormRegister<FormFields>;
  errors: FieldErrors<FormFields>;
};
export default function InventoryStockForm({
  registerAction,
  errors,
}: InventoryStockFormProps) {
  return (
    <>
      <div className="mt-2">
        <Label htmlFor="opening_stock">Opening Stock</Label>
        <Input
          {...registerAction("opening_stock")}
          id="opening_stock"
          placeholder="Ex: 10"
        />
        {errors.opening_stock && (
          <div className="text-red-500">{errors.opening_stock.message}</div>
        )}
      </div>

      <div className="flex justify-between">
        <div className="mt-2">
          <Label htmlFor="price_per_unit">At Price/Unit</Label>
          <Input
            {...registerAction("price_per_unit")}
            id="price_per_unit"
            placeholder="Ex: 2,000"
          />
          {errors.price_per_unit && (
            <div className="text-red-500">{errors.price_per_unit.message}</div>
          )}
        </div>

        <div className="mt-2">
          <Label htmlFor="min_quantity">Min Stock Qty</Label>
          <Input
            {...registerAction("min_quantity")}
            id="min_quantity"
            placeholder="Ex: 5"
          />
          {errors.min_quantity && (
            <div className="text-red-500">{errors.min_quantity.message}</div>
          )}
        </div>
      </div>
    </>
  );
}
