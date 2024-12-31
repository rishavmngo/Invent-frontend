type InventoryCardProps = {
  itemName: string;
  purchasePrice: number;
  salePrice: number;
  inStock: number;
};
export default function InventoryCard({
  itemName,
  purchasePrice,
  salePrice,
  inStock,
}: InventoryCardProps) {
  return (
    <>
      <div className="bg-invent_yellow flex flex-col rounded-xl border border-black p-2 w-[330px] mb-6">
        <h2 className="font-medium">{itemName}</h2>
        <div className="flex gap-8 mt-4 ">
          <div>
            <p className="text-invent_text_nh">Purchase Price</p>
            <p>₹ {purchasePrice.toFixed(2)}</p>
          </div>

          <div>
            <p className="text-invent_text_nh">Sale Price</p>
            <p>₹ {salePrice.toFixed(2)}</p>
          </div>

          <div>
            <p className="text-invent_text_nh">In Stock</p>
            <p className="text-green-400">{inStock}</p>
          </div>
        </div>
      </div>
    </>
  );
}
