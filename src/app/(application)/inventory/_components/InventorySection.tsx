"use client";
import { useGetAllInventoryQuery } from "@/state/inventory/inventoryApiSlice";
import InventoryCard from "./InventoryCard.component";

export default function InventorySection() {
  const { data: items, isSuccess } = useGetAllInventoryQuery();
  return (
    <div className="mx-16">
      <h1 className="text-2xl my-8">Inventory</h1>

      <div>
        {isSuccess &&
          items.map((item) => {
            return (
              <InventoryCard
                key={item.id}
                itemName={item.name}
                purchasePrice={item.purchase_price}
                salePrice={item.sell_price}
                inStock={item.total_quantity}
              />
            );
          })}
      </div>
    </div>
  );
}
