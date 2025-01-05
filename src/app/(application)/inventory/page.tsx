"use client";
import ButtonInvent from "@/components/ButtonInvent";
import InventorySection from "./_components/InventorySection";
import InventorySummarySection from "./_components/InventorySummarySection";
import { FaBox } from "react-icons/fa";
import { useState } from "react";
import AddItemForm from "./_components/addItemForm";
import { SubmitHandler, useForm } from "react-hook-form";
import { AddFormSchema, FormFields } from "@/types/inventory.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { filterUndefinedFields } from "@/lib/utils";
import {
  useAddInventoryMutation,
  useGetAllInventoryQuery,
} from "@/state/inventory/inventoryApiSlice";

export default function InventoryPage() {
  const [isDialogOpen, toggleDialog] = useState(false);
  const [AddInventoryMutation, { error, isError }] = useAddInventoryMutation();
  const { refetch } = useGetAllInventoryQuery();

  if (isError) {
    console.log(error);
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(AddFormSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const cleanedData = filterUndefinedFields(data);
    await AddInventoryMutation(cleanedData);
    await refetch();
    reset();
  };

  return (
    <>
      <div className="">Toolbar is coming!!</div>
      <div className="grid grid-cols-1  xl:grid-cols-2 w-full">
        <InventorySection />
        <InventorySummarySection />
        <AddItemForm
          isDialogOpen={isDialogOpen}
          toggleDialogAction={(value) => {
            reset();
            toggleDialog(value);
          }}
          registerAction={register}
          handleSubmitAction={handleSubmit}
          onSubmitAction={onSubmit}
          errors={errors}
          isSubmitting={isSubmitting}
        />

        <div className="absolute bottom-16 right-0 transform -translate-x-1/2">
          <ButtonInvent onClick={() => toggleDialog(!isDialogOpen)}>
            <FaBox />
            Add New Item
          </ButtonInvent>
        </div>
      </div>
    </>
  );
}
