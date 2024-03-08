import Link from "next/link";

import { createClient } from "@/utils/supabase/server";
import { MailingList } from "../components/mailing-list";

export default async function LandingPage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  const user = !(error || !data?.user);

  return (
    <div className="flex flex-col min-h-[100vh]">
      <div className="h-[100vh]">
        <section className="w-full py-12 sm:py-24 md:py-36 lg:py-48 xl:py-72">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Track your crypto portfolio
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Real-time tracking, price alerts, and historical analysis is
                  coming soon. All in one app.
                </p>
              </div>

              {user ? (
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-md font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href={"/application"}
                >
                  Launch Application
                </Link>
              ) : (
                <div className="space-x-4">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-md font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="/sign-up"
                  >
                    Sign up
                  </Link>
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md border border-zinc-200 border-gray-200 bg-white px-6 py-4 text-md font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-zinc-800"
                    href="/login"
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      <main id="features" className="flex-1 ">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Convenience
                </div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Have all your wallets across all blockchains in one place.
                </h2>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="/sign-up"
                >
                  Get Started
                </Link>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Security
                </div>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  Your data is only accessible by you, and is kept safe using
                  state of the art technologies.
                </p>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md border border-zinc-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-zinc-800"
                  href="mailto:arshaan.marketing@gmail.com"
                >
                  Contact Team
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Experience the workflow crypto natives love.
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Focus on research, fundamentals, and narratives instead of
                keeping track of where all your assets are with WalletBase.
              </p>
            </div>
            <MailingList />
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 WalletBase Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

/*

<nav className="sm:ml-auto flex gap-4 sm:gap-6">
  <Link className="text-xs hover:underline underline-offset-4" href="#">
    Terms of Service
  </Link>
  <Link className="text-xs hover:underline underline-offset-4" href="#">
    Privacy
  </Link>
</nav>

*/
