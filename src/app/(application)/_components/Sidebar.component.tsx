"use client";
import Image from "next/image";
import { useState } from "react";
import { LuChevronFirst, LuChevronLast } from "react-icons/lu";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(true);
  return (
    <aside className="h-screen ">
      <nav className="h-full flex flex-col bg-invent_bg_gray border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <Image
            src="/Invent_logo.svg"
            width={40}
            height={32}
            alt="invent_logo"
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <LuChevronFirst /> : <LuChevronLast />}
          </button>
        </div>
        <ul className="flex-1 px-3">{children}</ul>
        <div className="border-t flex p-3">
          <span className="bg-purple-300 p-2 w-10 h-10 rounded-lg text-purple-900 font-bold ">
            OE
          </span>
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}
          >
            <div className="leading-4">
              <h4 className="font-semibold">Ocean Ent.</h4>
              <span className="text-xs text-gray-600">ADMIN</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}
