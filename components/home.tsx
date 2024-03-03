import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";

import { signout } from "../app/login/actions";

export function Home() {
  return (
    <div key="1" className="flex flex-col w-full min-h-screen">
      <header className="flex items-center justify-between h-16 px-4 border-b shrink-0 md:px-6">
        <div className="w-1/5 flex items-center">
          <span className="font-bold">My Crypto DB</span>
          <span className="sr-only">My Crypto DB</span>
        </div>
        <form>
          <Button formAction={signout} variant={"destructive"}>
            Log Out
          </Button>
        </form>
      </header>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-2 p-4 md:gap-4 md:p-10">
        <div className="flex space-x-4 mb-2">
          <div className="flex w-1/5 justify-between">
            <Button className="w-1/2 mr-1">Filter</Button>
            <Button className="w-1/2 ml-1">Sort</Button>
          </div>
          <form className="w-3/5">
            <div className="relative">
              <Input
                className="w-full pl-8"
                placeholder="Query your database..."
                type="search"
              />
              <svg
                className=" absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500 dark:text-zinc-400"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
          </form>
          <Button className="w-1/5">Submit</Button>
        </div>
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Blockchain</TableHead>
                <TableHead>Nickname (Address)</TableHead>
                <TableHead>Amount in Currency</TableHead>
                <TableHead>State</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Ethereum</TableCell>
                <TableCell>
                  <span className="font-semibold">
                    Jamie&apos;s Ethereum Wallet
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 block">
                    0x3f5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE
                  </span>
                </TableCell>
                <TableCell>50 ETH</TableCell>
                <TableCell>In Wallet</TableCell>
                <TableCell>
                  <Button variant="primary_light">Edit</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bitcoin</TableCell>
                <TableCell>
                  <span className="font-semibold">
                    Jamie&apos;s Bitcoin Wallet
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 block">
                    1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
                  </span>
                </TableCell>
                <TableCell>100 BTC</TableCell>
                <TableCell>Being LPed</TableCell>
                <TableCell>
                  <Button variant="primary_light">Edit</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bitcoin</TableCell>
                <TableCell>
                  <span className="text-black dark:text-white">
                    1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
                  </span>
                </TableCell>
                <TableCell>50 BTC</TableCell>
                <TableCell>In Wallet</TableCell>
                <TableCell>
                  <Button variant="primary_light">Edit</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </main>
    </div>
  );
}
