"use client";

import { LoginForm } from "@/components/form/login-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "sonner";

export default function LoginPage() {
  return (
    <main className="py-8">
      <Link href={"/"}>
        <Button>Return bro</Button>
      </Link>
      <h1 className="mb-12 font-bold text-5xl text-center">Login bro</h1>
      <LoginForm />
      <Button
        className="mx-auto w-fit"
        onClick={() => {
          console.log("im getting clicked");
          toast("I am the boner of my sword");
        }}
      >
        Im toasting bro
      </Button>
    </main>
  );
}
