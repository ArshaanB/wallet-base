import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import NavBar from "../components/navbar";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WalletBase",
  description:
    "Keep track of your crypto assets across various blockchains with a beautiful UX."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
