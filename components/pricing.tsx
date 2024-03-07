import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card
} from "@/components/ui/card";

function HeartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="red"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="red"
      className="w-6 h-6 inline-block"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
      />
    </svg>
  );
}

export function Pricing() {
  return (
    <div className="grid items-start gap-8">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-5xl font-extrabold text-gray-900">Pricing</h1>
        <p className="text-lg text-gray-500 w-3/5 mt-2">
          We promise to keep it free and cover all costs for as long as we can.
          If you&apos;re in the first 25 users, thank you <HeartIcon />.
          We&apos;ll personally guarantee WalletBase free for life.
        </p>
      </div>
      <Card className="w-full max-w-sm mx-auto p-4 pb-16">
        <CardContent className="p-6 grid gap-4 relative">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-extrabold text-gray-900">
              Free
            </CardTitle>
            <CardDescription className="text-gray-500">
              You&apos;ll get all the features in this plan
            </CardDescription>
          </CardHeader>
          <div className="flex items-center justify-between">
            <div>Blockchains</div>
            <div className="font-bold">Unlimited</div>
          </div>
          <div className="flex items-center justify-between">
            <div>Wallets</div>
            <div className="font-bold">Unlimited</div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              New Features
              <div className="text-sm text-gray-500 px-2">
                DeFi, notifications, points tracking, and more
              </div>
            </div>
            <div className="font-bold">Immediately</div>
          </div>
          <div className="flex items-center justify-between">
            <div>Support</div>
            <div className="font-bold">Priority email access</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
