import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { login, signup } from "../app/login/actions";
import { WalletIcon } from "../assets/icons";

export function Login() {
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
          <form className="space-y-6 mt-8">
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
            <div className="grid grid-cols-2 gap-3">
              <Button variant="dark" formAction={signup}>
                Sign up
              </Button>
              <Button variant="outline" formAction={login}>
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
