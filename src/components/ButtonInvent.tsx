import React from "react";

export default function ButtonInvent({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className=" flex gap-4 items-center p-4 rounded-lg text-3xl bg-invent_crimson"
    >
      {children}
    </button>
  );
}
