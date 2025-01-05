"use client";
import { store } from "@/state/store";
import { Provider } from "react-redux";
import LoadingSpinner from "./LoadingSpinner";
import { redirect } from "next/navigation";
import useAuth from "@/hooks/useAuth";

interface AuthProviderProps {
  children: React.ReactNode;
}

// Custom hook for auth logic
export function AuthProvider({ children }: AuthProviderProps) {
  const { user, isLoading, isError, isPublicRoute } = useAuth({});

  if (isError && !isPublicRoute) {
    redirect("/login");
  }

  if (isLoading || (!user && !isPublicRoute)) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
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
