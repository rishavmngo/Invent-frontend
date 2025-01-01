import { getToken } from "@/lib/utils";
import { redirect } from "next/navigation";

export default function Home() {
  const token = getToken();
  if (!token) {
    redirect("/sign-up");
  }
  redirect("/dashboard");
}
