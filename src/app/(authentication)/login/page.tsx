"use client";
import LoadingSpinner from "@/components/LoadingSpinner";
import useAuth from "@/hooks/useAuth";
import { useLoginMutation } from "@/state/auth/authApiSlice";
import { redirect } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export default function LoginPage() {
  const [LoginMutation, { isLoading, isSuccess, data }] = useLoginMutation();
  const { register, handleSubmit } = useForm();
  const { isSuccess: haveUser, isLoading: fetchingLoginedUser } = useAuth({
    token: data?.token,
  });

  if (isSuccess && haveUser) {
    redirect("/dashboard");
  }

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    LoginMutation({ email: data.email, password: data.password });
  };

  if (fetchingLoginedUser) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

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
