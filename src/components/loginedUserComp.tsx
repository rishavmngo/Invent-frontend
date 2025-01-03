"use client";
import { getToken } from "@/lib/utils";
import { useGetLoginedBusinessQuery } from "@/state/business/businessApiSlice";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function LoginedUserComp() {
  const dispatch = useDispatch();
  const token = getToken();
  if (!token) {
    console.log("redirecting login");
    // redirect("/login");
  }

  useEffect(() => {
    if (!token) return;
    dispatch(setToken(token));
  }, [dispatch, token]);

  const { isLoading, isSuccess } = useGetLoginedBusinessQuery(undefined, {
    skip: !token,
  });

  console.log("success", isSuccess);
  if (isSuccess) {
    console.log("redirecting dashboard");
    // redirect("/dashboard");
  }
  if (isLoading) {
    return <div>Loading....</div>;
  }
  // const token = useSelector((state: RootType) => state.auth.token);

  if (token) {
    redirect("/dashboard");
  }
  return null;
}
