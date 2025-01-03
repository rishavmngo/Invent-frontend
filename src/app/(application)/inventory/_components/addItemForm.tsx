"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dispatch, SetStateAction } from "react";
import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import LoadingSpinner from "@/components/LoadingSpinner";
import { FormFields } from "../_types/inventory.Scheama";
import InventoryPricingForm from "./InventoryPricingForm";
import InventoryStockForm from "./InventoryStockForm";
import AddItemFormDialogWrapper from "./AddItemFormDialogWrapper";
import InventoryItemDetailsForm from "./InventoryItemDetailsForm";

type AddItemFormProps = {
  isDialogOpen: boolean;
  toggleDialogAction: Dispatch<SetStateAction<boolean>>;
  registerAction: UseFormRegister<FormFields>;
  handleSubmitAction: UseFormHandleSubmit<FormFields>;
  onSubmitAction: SubmitHandler<FormFields>;
  errors: FieldErrors<FormFields>;
  isSubmitting: boolean;
};

export default function AddItemForm({
  isDialogOpen,
  errors,
  isSubmitting,
  toggleDialogAction,
  registerAction,
  handleSubmitAction,
  onSubmitAction,
}: AddItemFormProps) {
  return (
    <AddItemFormDialogWrapper
      isDialogOpen={isDialogOpen}
      toggleDialogAction={toggleDialogAction}
    >
      <form onSubmit={handleSubmitAction(onSubmitAction)}>
        <InventoryItemDetailsForm
          registerAction={registerAction}
          errors={errors}
        />
        <Tabs defaultValue="pricing" className="">
          <TabsList>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
            <TabsTrigger value="stock">Stock</TabsTrigger>
          </TabsList>
          <TabsContent value="pricing">
            <InventoryPricingForm
              registerAction={registerAction}
              errors={errors}
            />
          </TabsContent>
          <TabsContent value="stock">
            <InventoryStockForm
              registerAction={registerAction}
              errors={errors}
            />
          </TabsContent>
        </Tabs>

        <button
          type="submit"
          className="mt-8 bg-black/80 py-2 px-4 rounded-lg text-white"
        >
          {isSubmitting ? <LoadingSpinner /> : "Save"}
        </button>
      </form>
    </AddItemFormDialogWrapper>
  );
}
