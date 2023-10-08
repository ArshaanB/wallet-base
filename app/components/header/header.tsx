"use client";

/**
 * Tailwind UI: https://tailwindui.com/components/marketing/elements/headers
 * Option 1
 */

export default function Header() {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 text-lg font-semibold">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">My Crypto DB</span>
            My Crypto DB
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="mailto:arshaan.bhimani@gmail.com"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Send me feedback!
          </a>
        </div>
      </nav>
    </header>
  );
}
