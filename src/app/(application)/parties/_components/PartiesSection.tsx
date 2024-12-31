import PartiesCard from "./PartiesCard";

export default function PartiesSection() {
  return (
    <div className="mx-16">
      <h1 className="text-2xl my-8">Parties</h1>
      <div>
        <PartiesCard
          partyName={"Rk electronics"}
          date={new Date()}
          amount={51428.58}
        />
      </div>
    </div>
  );
}
