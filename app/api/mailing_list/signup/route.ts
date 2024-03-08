import { type NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

import { createClient } from "@/utils/supabase/server";

// Create a Route Handler for api/mailing_list/signup, adding a user to the mailing
// list.
export async function POST(request: NextRequest) {
  const supabase = createClient();

  try {
    // TODO: validate inputs
    const { email } = await request.json();

    const { error } = await supabase.from("mailing_list").insert({
      id: uuidv4(),
      inserted_at: new Date().toISOString(),
      email: email
    });

    if (error) {
      console.error("Error inserting email: ", error);
      return NextResponse.json(
        { error: "Internal Server Error (Database)" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email inserted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing request: ", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
