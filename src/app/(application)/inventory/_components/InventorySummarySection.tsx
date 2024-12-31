import InventorySummary from "./InventorySummary_card";

export default function InventorySummarySection() {
  return (
    <div className=" mx-16 w-3/5">
      <h1 className="text-2xl my-8">Inventory summary</h1>
      <div className="grid grid-cols-2 gap-0">
        <InventorySummary
          keyName="No. of Items"
          value="03"
          color="bg-invent_purple"
        />

        <InventorySummary
          keyName="Stock Value"
          value="₹ 28000.00"
          color="bg-invent_crimson"
        />
        <InventorySummary
          keyName="Low Stocks Items"
          value="01"
          color="bg-[#BDFFDE]"
        />
      </div>
    </div>
  );
}
