"use server";

import { redirect } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

import { createClient } from "@/utils/supabase/server";

export async function mailing_signup(formData: FormData) {
  const supabase = createClient();

  // TODO: validate inputs
  const data = {
    email: formData.get("email") as string
  };

  const { error } = await supabase.from("mailing_list").insert({
    id: uuidv4(),
    inserted_at: new Date().toISOString(),
    email: data.email
  });

  if (error) {
    console.error("Error inserting email: ", error);
    redirect("/error");
  }
}
