"use client";
import { setCredentials } from "@/state/auth/authSlice";
import { useGetLoginedBusinessQuery } from "@/state/business/businessApiSlice";
import { AppDispatch, store } from "@/state/store";
import { useEffect, useState } from "react";
import { Provider, useDispatch } from "react-redux";
import LoadingSpinner from "./LoadingSpinner";
import { redirect, usePathname } from "next/navigation";

// Constants
const PUBLIC_ROUTES = ["/login", "/sign-up"];

// Types
interface AuthProviderProps {
  children: React.ReactNode;
}

// Custom hook for auth logic
export function AuthProvider({ children }: AuthProviderProps) {
  const pathname = usePathname();
  const dispatch = useDispatch<AppDispatch>();
  const [token, setLocalToken] = useState<string | null>(null);
  const isPublicRoute = PUBLIC_ROUTES.some((route) => pathname.endsWith(route));

  useEffect(() => {
    const tok = localStorage.getItem("token");
    if (tok) {
      setLocalToken(tok);
    } else if (!isPublicRoute) {
      redirect("/login");
    }
  }, [dispatch, isPublicRoute]);

  const {
    data: user,
    isLoading,
    isError,
  } = useGetLoginedBusinessQuery(
    { token },
    {
      skip: isPublicRoute || token === null,
    },
  );

  useEffect(() => {
    if (user) {
      dispatch(setCredentials({ user, token, isAuthenticated: true }));
    }
  }, [user, dispatch, token]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (isError && !isPublicRoute) {
    // dispatch(logout());
    redirect("/login");
  }

  if (!token && !isPublicRoute) {
    return null;
  }

  return <>{children}</>;
}

// App Wrapper Component
export default function AppWrapper({ children }: AuthProviderProps) {
  return (
    <Provider store={store}>
      <AuthProvider>{children}</AuthProvider>
    </Provider>
  );
}
