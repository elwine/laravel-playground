"use server";
import * as z from "zod";
import { apiClient } from "@/lib/api-client";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { loginSchema } from "@/schemas/login-schema";

interface ILoginResponse {
  success: boolean;
  message: string;
  token?: string;
}

export const handleLogin = async (formData: FormData) => {
  // get the form data form the formData object
  const values = Object.fromEntries(formData) as z.infer<typeof loginSchema>;

  const res = await apiClient.post<ILoginResponse>("/auth/login", values);
  if (res.statusText != "OK") return false;

  const { success, token } = res.data;

  if (!success) return false;

  cookies().set("token", token!, {
    httpOnly: true,
    secure: false,
    path: "/",
    maxAge: 60 * 60 * 24,
  });
  redirect("/");
};
