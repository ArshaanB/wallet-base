import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import ProfileForm from "../../components/profile-form";

export default async function Profile() {
  const supabase = createClient();

  const {
    data: { user },
    error
  } = await supabase.auth.getUser();
  if (error || !user) {
    redirect("/");
  }

  return (
    <div>
      <ProfileForm user={user} />
    </div>
  );
}
