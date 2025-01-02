"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dispatch, SetStateAction } from "react";
import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { Label } from "@/components/ui/label";
import LoadingSpinner from "@/components/LoadingSpinner";
import { FormFields } from "../_types/inventory.Scheama";

export default function AddItemForm({
  isDialogOpen,
  errors,
  isSubmitting,
  toggleDialogAction,
  registerAction,
  handleSubmitAction,
  onSubmitAction,
}: {
  isDialogOpen: boolean;
  toggleDialogAction: Dispatch<SetStateAction<boolean>>;
  registerAction: UseFormRegister<FormFields>;
  handleSubmitAction: UseFormHandleSubmit<FormFields>;
  onSubmitAction: SubmitHandler<FormFields>;
  errors: FieldErrors<FormFields>;
  isSubmitting: boolean;
}) {
  return (
    <Dialog open={isDialogOpen} onOpenChange={toggleDialogAction}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Item</DialogTitle>
          <form onSubmit={handleSubmitAction(onSubmitAction)}>
            <div className="my-2">
              <Label htmlFor="name">Item name</Label>
              <Input
                {...registerAction("name")}
                type="text"
                id="name"
                placeholder="Kettle"
              />
              {errors.name && (
                <div className="text-red-500">{errors.name.message}</div>
              )}
            </div>

            <Tabs defaultValue="pricing" className="">
              <TabsList>
                <TabsTrigger value="pricing">Pricing</TabsTrigger>
                <TabsTrigger value="stock">Stock</TabsTrigger>
              </TabsList>
              <TabsContent value="pricing">
                <div className="mt-2">
                  <Label htmlFor="sale_price">Sale Price</Label>
                  <Input
                    {...registerAction("sell_price")}
                    id="sale_price"
                    placeholder="Sell Price"
                  />
                  {errors.sell_price && (
                    <div className="text-red-500">
                      {errors.sell_price.message}
                    </div>
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
                    <div className="text-red-500">
                      {errors.purchase_price.message}
                    </div>
                  )}
                </div>
              </TabsContent>
              <TabsContent value="stock">
                <div className="mt-2">
                  <Label htmlFor="opening_stock">Opening Stock</Label>
                  <Input
                    {...registerAction("opening_stock")}
                    id="opening_stock"
                    placeholder="Ex: 10"
                  />
                  {errors.opening_stock && (
                    <div className="text-red-500">
                      {errors.opening_stock.message}
                    </div>
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
                      <div className="text-red-500">
                        {errors.price_per_unit.message}
                      </div>
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
                      <div className="text-red-500">
                        {errors.min_quantity.message}
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <button
              type="submit"
              className="mt-8 bg-black/80 py-2 px-4 rounded-lg text-white"
            >
              {isSubmitting ? <LoadingSpinner /> : "Save"}
            </button>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
