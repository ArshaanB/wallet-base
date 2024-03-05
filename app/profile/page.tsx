import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { ProfileForm } from "../../components/profile-form";
import { Button } from "@/components/ui/button";

import { signout } from "../login/actions";

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
    <div className="flex flex-col justify-center items-center h-screen space-y-4">
      <form className="w-full max-w-3xl">
        <Button formAction={signout} variant={"destructive"} className="w-full">
          Log Out
        </Button>
      </form>
      <ProfileForm user={user} />
    </div>
  );
}
