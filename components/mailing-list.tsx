"use client";
import { ReactNode } from "react";
import { useMutation } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Button, ButtonVariant } from "@/components/ui/button";

import { ArrowPathIcon, XMarkIcon, CheckIcon } from "../assets/icons";

export function MailingList() {
  const mutation = useMutation({
    mutationFn: (email: string) =>
      fetch("/api/mailing_list/signup", {
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

  let signUpButtonColor: ButtonVariant = "dark";
  let signUpButtonContents: ReactNode = "Sign up";
  if (mutation.isPending) {
    signUpButtonColor = "yellow";
    signUpButtonContents = <ArrowPathIcon />;
  } else if (mutation.isError) {
    signUpButtonColor = "destructive";
    signUpButtonContents = <XMarkIcon />;
  } else if (mutation.isSuccess) {
    signUpButtonColor = "green";
    signUpButtonContents = <CheckIcon />;
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
          required
        />
        <Button type="submit" variant={signUpButtonColor} className="w-24">
          {signUpButtonContents}
        </Button>
      </form>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        Sign up to get product updates and special offers.
      </p>
    </div>
  );
}
