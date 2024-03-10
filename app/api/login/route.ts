import { type NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

import { createClient } from "@/utils/supabase/server";

// Create a Route Handler for api/login, for a user to login to the app.
export async function POST(request: NextRequest) {
  const supabase = createClient();

  try {
    // TODO: validate inputs
    const { email, password } = await request.json();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      console.error("Error with user login: ", error);
      return NextResponse.json(
        { error: "Internal Server Error (Database)", redirect: "/error" },
        { status: 500 }
      );
    }
    revalidatePath("/", "layout");
    return NextResponse.json(
      {
        message: "Logged in successfully",
        redirect: "/application"
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error with user login: ", error);
    return NextResponse.json(
      { error: "Internal Server Error", redirect: "/error" },
      { status: 500 }
    );
  }
}
