"use client";

import { RootType } from "@/state/store";
import { useSelector } from "react-redux";

export default function DashboardPage() {
  const { user } = useSelector((state: RootType) => state.auth);
  return <div>Dashboard Page {user && user.name}</div>;
}
