"use server";

import { NextResponse } from "next/server";

export const setNotifyToast = (
  res: NextResponse,
  message: string,
): NextResponse => {
  res.cookies.set("toast-message", message, {
    httpOnly: false,
    path: "/",
    maxAge: 9,
  });
  return res;
};
