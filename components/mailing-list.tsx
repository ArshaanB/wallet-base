"use client";

import { useMutation } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function MailingList() {
  const mutation = useMutation({
    mutationFn: (email: string) =>
      fetch("/mailing_list/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      })
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = event.currentTarget.email.value;
    mutation.mutate(email);
  }

  let buttonColor;
  if (mutation.isPending) {
    buttonColor = "yellow";
  } else if (mutation.isError) {
    buttonColor = "red";
  } else if (mutation.isSuccess) {
    buttonColor = "green";
  }

  return (
    <div className="mx-auto w-full max-w-sm space-y-2">
      <form className="flex space-x-2" onSubmit={handleSubmit}>
        <Input
          className="max-w-lg flex-1"
          placeholder="Enter your email"
          id="email"
          type="email"
          name="email"
        />
        <Button type="submit" variant={"dark"}>
          Sign Up
        </Button>
      </form>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        Sign up to get product updates and special offers.
      </p>
    </div>
  );
}
