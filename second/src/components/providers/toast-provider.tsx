"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { toast, Toaster } from "sonner";
import { getCookie, deleteCookie } from "cookies-next";

export function ToastProvider() {
  const pathName = usePathname();
  const cookieName = "toast-message";

  useEffect(() => {
    const message = getCookie(cookieName);
    if (!message) return;
    toast(message);
    deleteCookie(cookieName);
  }, [pathName]);

  return (
    <Toaster
      toastOptions={{
        classNames: {
          toast: "bg-black",
          title: "text-white",
        },
      }}
    />
  );
}
