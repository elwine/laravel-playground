import { NextRequest, NextResponse } from "next/server";
import * as fs from "fs";
import { getSessionPath, splitTokenName } from "@/lib/utils";

export async function POST(req: NextRequest) {
  const { token, user } = await req.json();
  if (token) {
    const path = getSessionPath() + `/${splitTokenName(token)}`;
    fs.writeFileSync(path, JSON.stringify(user));
    console.log("Đã lưu session");
  }

  return NextResponse.json({ success: true });
}

export async function GET(request: Request) {
  const token = request.headers.get("token");
  if (!token)
    return NextResponse.json({
      user: null,
    });

  const path = getSessionPath() + `/${splitTokenName(token)}`;
  const data = fs.readFileSync(path, "utf-8");
  const user = JSON.parse(data);

  return NextResponse.json({
    user,
  });
}
