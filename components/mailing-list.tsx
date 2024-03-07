"use client";
import { ReactNode } from "react";
import { useMutation } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Button, ButtonVariant } from "@/components/ui/button";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  );
}

function ArrowPathIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
      />
    </svg>
  );
}

function XMarkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}

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

  let signUpButtonColor: ButtonVariant = "dark";
  let signUpButtonContents: ReactNode = "Sign Up";
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
