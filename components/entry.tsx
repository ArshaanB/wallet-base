"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { WalletIcon } from "../assets/icons";
import { useMutation } from "@tanstack/react-query";

type Entry = {
  type: "login" | "signup";
};

export function Entry({ type: entryType }: Entry) {
  const router = useRouter();

  // For signup and login, onSuccess handles both success and error cases on the
  // server.
  const { mutate: signup } = useMutation({
    mutationFn: (formData: FormData) =>
      fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(Object.fromEntries(formData))
      }),
    onSuccess: async (data) => {
      const res = await data.json();
      router.push(res.redirect);
      router.refresh();
    }
  });

  const { mutate: login } = useMutation({
    mutationFn: (formData: FormData) =>
      fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(Object.fromEntries(formData))
      }),
    onSuccess: async (data) => {
      const res = await data.json();
      router.push(res.redirect);
      router.refresh();
    }
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    if (entryType === "signup") {
      signup(formData);
    } else {
      login(formData);
    }
  }
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md">
        <div className="flex justify-center">
          <WalletIcon className="h-12 w-12 text-gray-900" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Track your crypto portfolio
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Real-time tracking, price alerts, and historical analysis. All in one
          app.
        </p>
        <div className="mt-8">
          <form className="space-y-6 mt-8" onSubmit={handleSubmit}>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email address
              </label>
              <Input
                autoComplete="email"
                id="email"
                placeholder="Email address"
                required
                type="email"
                name="email"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <Input
                autoComplete="current-password"
                id="password"
                placeholder="Password"
                required
                type="password"
                name="password"
              />
            </div>
            <div>
              {entryType === "signup" ? (
                <div className="flex flex-col w-full">
                  <Button variant="dark" type="submit">
                    Sign up
                  </Button>
                  <p className="text-center mt-4">
                    Already have an account?
                    <Link
                      className="text-blue-600 hover:underline px-2"
                      href="/login"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              ) : (
                <div className="flex flex-col w-full">
                  <Button variant="dark" type="submit">
                    Login
                  </Button>
                  <p className="text-center mt-4">
                    Would you like to create an account?
                    <Link
                      className="text-blue-600 hover:underline px-2"
                      href="/sign-up"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
