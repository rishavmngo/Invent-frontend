"use client";
import { RootType } from "@/state/store";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Home() {
  const { user } = useSelector((state: RootType) => state.auth);

  return (
    <div>
      <h1>Hi {user && user.name}</h1>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}
