import { format } from "date-fns";
type PartiesCardProps = {
  partyName: string;
  date: Date;
  amount: number;
};
export default function PartiesCard({
  partyName,
  date,
  amount,
}: PartiesCardProps) {
  const formatedDate = format(date, "dd MMM, yy");
  const formatedAmount = `₹ ${amount.toFixed(2)}`;
  return (
    <>
      <div className="bg-[#525252] flex justify-between rounded-xl border border-black p-4 w-[330px] mb-6">
        <div>
          <h2 className="font-semibold text-white">{partyName}</h2>
          <p className="text-white/50">{formatedDate}</p>
        </div>
        <div className="text-right">
          <h2 className="font-semibold text-invent_bright_green">
            {formatedAmount}
          </h2>
          <p className="text-invent_bright_green/70">You&apos;ll Get</p>
        </div>
      </div>
    </>
  );
}
