"use client";
import ButtonInvent from "@/components/ButtonInvent";
import InventorySection from "./_components/InventorySection";
import InventorySummarySection from "./_components/InventorySummarySection";
import { FaBox } from "react-icons/fa";
import { useState } from "react";
import AddItemForm from "./_components/addItemForm";
import { SubmitHandler, useForm } from "react-hook-form";
import { AddFormSchema, FormFields } from "./_types/inventory.Scheama";
import { zodResolver } from "@hookform/resolvers/zod";

export default function InventoryPage() {
  const [isDialogOpen, toggleDialog] = useState(false);

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
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log(data);
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

        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
          <ButtonInvent onClick={() => toggleDialog(!isDialogOpen)}>
            <FaBox />
            Add New Item
          </ButtonInvent>
        </div>
      </div>
    </>
  );
}
