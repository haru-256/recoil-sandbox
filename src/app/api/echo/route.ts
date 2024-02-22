import { type NextRequest, NextResponse } from "next/server";

type EchoData = {
  message: string;
};

export async function POST(request: NextRequest) {
  const data: EchoData = await request.json();
  console.log(data);

  return NextResponse.json({ message: data.message });
}

export async function GET() {
  return NextResponse.json({ message: "Nothing yet. Please Type Something!" });
}
