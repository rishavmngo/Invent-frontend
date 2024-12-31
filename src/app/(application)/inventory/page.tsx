import InventorySection from "./_components/InventorySection";
import InventorySummarySection from "./_components/InventorySummarySection";

export default function InventoryPage() {
  return (
    <>
      <div className="">Toolbar is coming!!</div>
      <div className="grid grid-cols-1  xl:grid-cols-2 w-full">
        <InventorySection />
        <InventorySummarySection />
      </div>
    </>
  );
}
