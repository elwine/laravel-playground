"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { toast, Toaster } from "sonner";
import { getCookie, deleteCookie } from "cookies-next";

export function ToastProvider() {
  const pathName = usePathname();

  // listen to page change
  useEffect(() => {
    const message = getCookie("toast-message");
    if (!message) return;

    // sending toast message
    toast(message);
    // delete the cookie
    deleteCookie("toast-message");
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
