"use client";
import { setCredentials } from "@/state/auth/authSlice";
import { useGetLoginedBusinessQuery } from "@/state/business/businessApiSlice";
import { AppDispatch, store } from "@/state/store";
import { useEffect, useState } from "react";
import { Provider, useDispatch } from "react-redux";
import LoadingSpinner from "./LoadingSpinner";
import { redirect, usePathname } from "next/navigation";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const dispatch = useDispatch<AppDispatch>();
  const [token, setLocalToken] = useState<string | null>(null);

  useEffect(() => {
    const tempToken = localStorage.getItem("token");

    if (!tempToken) {
      if (!(pathname.endsWith("login") || pathname.endsWith("sign-up"))) {
        console.log(`redirecting to login from  ${pathname}`);
        redirect("/login");
      }
    } else {
      setLocalToken(tempToken);
    }
  }, [pathname]);

  useEffect(() => {
    if (token) {
      dispatch(setCredentials({ token: token, user }));
    }
  }, [token, dispatch]);

  console.log("here 1");
  const {
    data: user,
    isSuccess,
    isLoading,
    isError,
  } = useGetLoginedBusinessQuery(undefined, {
    skip: !token,
  });

  useEffect(() => {
    console.log(user);
    if (isSuccess) {
      dispatch(setCredentials({ user: user, token, isAuthenticated: true }));
    }
  }, [user, isSuccess, dispatch]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center  h-screen">
        <LoadingSpinner />
      </div>
    );
  }
  if (isError) {
    if (!(pathname.endsWith("login") || pathname.endsWith("sign-up"))) {
      console.log(`redirecting to login from  ${pathname}`);
      redirect("/login");
    }
  }

  return <div>{children}</div>;
}

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <AuthProvider>{children}</AuthProvider>
    </Provider>
  );
}
