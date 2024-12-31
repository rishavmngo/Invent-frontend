export default function InventorySummary({
  keyName,
  value,
  color,
}: {
  keyName: string;
  value: string;
  color: string;
}) {
  return (
    <div>
      <div
        className={`${color} rounded-xl border border-black p-2 inline-block px-5 mb-6`}
      >
        <h2 className="font-medium">{keyName}</h2>
        <p className="text-2xl mt-4">{value}</p>
      </div>
    </div>
  );
}
