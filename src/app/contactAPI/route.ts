import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

   
    const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;


    const response = await fetch(`https://formspree.io/f/${FORM_ID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    const result = await response.json();

    if (result.ok || response.status === 200) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: result.error });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: "Server error" });
  }
}
