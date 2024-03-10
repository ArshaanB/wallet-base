import { type NextRequest, NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

// Create a Route Handler for api/signup, to sign up a new user.
export async function POST(request: NextRequest) {
  const supabase = createClient();

  try {
    // TODO: validate inputs
    const { email, password } = await request.json();

    const { error } = await supabase.auth.signUp({
      email,
      password
    });

    if (error) {
      console.error("Error with user sign up: ", error);
      return NextResponse.json(
        { error: "Internal Server Error (Database)", redirect: "/error" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: "Email inserted successfully",
        redirect: "/sign-up/confirmation"
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error with user sign up: ", error);
    return NextResponse.json(
      { error: "Internal Server Error", redirect: "/error" },
      { status: 500 }
    );
  }
}
