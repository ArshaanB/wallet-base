import { type NextRequest, NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

// Create a Route Handler for api/profile/update, updating a user's details.
export async function POST(request: NextRequest) {
  const supabase = createClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  try {
    // TODO: validate inputs
    const { firstName, lastName, evmAddr, svmAddr, btcAddr } =
      await request.json();

    const { error } = await supabase.from("profiles").upsert({
      id: user?.id as string,
      first_name: firstName,
      last_name: lastName,
      evm_addr: evmAddr,
      svm_addr: svmAddr,
      btc_addr: btcAddr,
      updated_at: new Date().toISOString()
    });

    if (error) {
      console.error("Error updating profile: ", error);
      return NextResponse.json(
        { error: "Internal Server Error (Database)" },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Profile updated" }, { status: 200 });
  } catch (error) {
    console.error("Error processing request: ", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
