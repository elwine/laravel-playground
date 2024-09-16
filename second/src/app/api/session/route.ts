import { NextRequest, NextResponse } from "next/server";
import * as fs from "fs";

export async function POST(req: NextRequest) {
  const { token, user } = await req.json();
  if (token) {
    const name = token.split("|").slice(-1).join("");
    const path = `${process.cwd()}/session/${name}`;
    fs.writeFileSync(path, JSON.stringify(user));
    console.log("Đã lưu session");
  }

  return NextResponse.json({ success: true });
}
