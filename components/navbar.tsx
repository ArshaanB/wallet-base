"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { WalletIcon } from "../assets/icons";

export default function NavBar() {
  const isHomepage = usePathname() === "/";
  const isProfile = usePathname() === "/profile";

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="/">
        <WalletIcon className="h-6 w-6 mr-2" />
        <span className="sr-only">Wallet Base</span>
        <span className="mr-2 font-medium">Wallet Base</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {isHomepage && (
          <>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#features"
            >
              Features
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="/pricing"
            >
              Pricing
            </Link>
          </>
        )}
        {!isHomepage && !isProfile && (
          <>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="/profile"
            >
              My Profile
            </Link>
          </>
        )}
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="mailto:arshaan.marketing@gmail.com"
        >
          Contact Us
        </Link>
      </nav>
    </header>
  );
}
