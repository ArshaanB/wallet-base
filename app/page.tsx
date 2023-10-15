"use client";

import { useState } from "react";

import Header from "./components/header/header";
import Table from "./components/table/table";

import { createAccount } from "./utils/database";

export default function Home() {
  const [address, setAddress] = useState("");

  return (
    <div>
      <Header />
      {/* Consider: flex flex-col items-center justify-between */}
      <main className="min-h-screen p-24">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Welcome!</h1>
          <div className="flex items-end">
            <div className="w-3/4 pr-2">
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="0x0"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="w-1/4 pl-2">
              <button
                onClick={() => createAccount(address)}
                type="button"
                className="rounded-md bg-indigo-600 w-full px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
        <Table />
      </main>
    </div>
  );
}
