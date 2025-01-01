"use client";
import { useSignupMutation } from "@/state/auth/authApiSlice";
import { redirect } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export default function SignUpPage() {
  const [SignupMutation, { isLoading, isSuccess }] = useSignupMutation();
  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    SignupMutation({ email: data.email, password: data.password });
  };
  if (isSuccess) {
    redirect("/dashboard");
  }

  return (
    <>
      <h1>Sign up page</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input {...register("email")} id="email" />
        <label htmlFor="password">Password</label>
        <input {...register("password")} id="password" />
        <input type="submit" />
      </form>
      {isLoading && <span>Registring....</span>}
    </>
  );
}
