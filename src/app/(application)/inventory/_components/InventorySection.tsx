import InventoryCard from "./InventoryCard.component";

export default function InventorySection() {
  return (
    <div className="mx-16">
      <h1 className="text-2xl my-8">Inventory</h1>
      <div>
        <InventoryCard
          itemName={"Electric Kettle"}
          purchasePrice={800}
          salePrice={1000}
          inStock={18}
        />

        <InventoryCard
          itemName={"Router mono"}
          purchasePrice={2000}
          salePrice={2500}
          inStock={3}
        />
      </div>
    </div>
  );
}
