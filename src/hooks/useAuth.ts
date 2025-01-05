import { getToken, setToken } from "@/lib/utils";
import { setCredentials } from "@/state/auth/authSlice";
import { useGetLoginedBusinessQuery } from "@/state/business/businessApiSlice";
import { redirect, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

type UseAuthProps = {
  token?: string;
};

const PUBLIC_ROUTES = ["/login", "/sign-up"];
export default function useAuth({ token }: UseAuthProps) {
  const pathname = usePathname();
  const [localToken, setLocalToken] = useState<string | null>();
  const dispatch = useDispatch();
  const isPublicRoute = PUBLIC_ROUTES.some((route) => pathname.endsWith(route));

  // if token then need to save in local storage
  useEffect(() => {
    if (token) {
      setToken(token);
      setLocalToken(token);
      dispatch(setCredentials({ token: token }));
    } else {
      const tempToken = getToken();
      console.log(pathname);
      if (!tempToken && !isPublicRoute) {
        redirect("/login");
      }
      setLocalToken(tempToken);
      dispatch(setCredentials({ token: tempToken }));
    }
  }, [token, dispatch, isPublicRoute]);

  const {
    data: user,
    isSuccess,
    isLoading,
    isError,
  } = useGetLoginedBusinessQuery(undefined, { skip: !localToken });

  useEffect(() => {
    if (isSuccess) {
      dispatch(
        setCredentials({
          token: localToken,
          user: user,
          isAuthenticated: true,
        }),
      );
    }
  }, [user, isSuccess, dispatch, localToken]);

  return { user, isSuccess, isLoading, isError, isPublicRoute };
}
