"use client";
import { useLoginMutation } from "@/state/auth/authApiSlice";
import { redirect } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export default function LoginPage() {
  const [LoginMutation, { isLoading, isSuccess }] = useLoginMutation();
  const { register, handleSubmit } = useForm();
  if (isSuccess) {
    redirect("/dashboard");
  }
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
