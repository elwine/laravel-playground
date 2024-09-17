"use server";

import { getSession } from "@/lib/session";

export default async function Header() {
  const { user } = await getSession();
  console.log(user);
  return (
    <header className="flex justify-center items-center bg-black px-6 py-3 w-full">
      Hello {user ? user.name : ""}
    </header>
  );
}
