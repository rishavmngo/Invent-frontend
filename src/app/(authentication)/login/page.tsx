"use client";
import { useLoginMutation } from "@/state/auth/authApiSlice";
import { setCredentials } from "@/state/auth/authSlice";
import { useGetLoginedBusinessQuery } from "@/state/business/businessApiSlice";
import { AppDispatch } from "@/state/store";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

export default function LoginPage() {
  const [LoginMutation, { isLoading, isSuccess, data }] = useLoginMutation();
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit } = useForm();

  const { data: user, isSuccess: haveUser } = useGetLoginedBusinessQuery(
    undefined,
    { skip: !isSuccess },
  );

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("token", data.token);
    }
  }, [data, isSuccess]);

  useEffect(() => {
    if (haveUser && isSuccess && user) {
      dispatch(
        setCredentials({
          token: data.token,
          isAuthenticated: true,
          user: user,
        }),
      );
      redirect("/dashboard");
    }
  }, [dispatch, user, haveUser]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    LoginMutation({ email: data.email, password: data.password });
  };

  return (
    <>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input {...register("email")} id="email" />
        <label htmlFor="password">Password</label>
        <input {...register("password")} id="password" />
        <input type="submit" />
      </form>

      {isLoading && <span>progress....</span>}
    </>
  );
}
