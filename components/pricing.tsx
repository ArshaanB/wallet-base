import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card
} from "@/components/ui/card";

export function Pricing() {
  return (
    <div className="grid items-start gap-8">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-5xl font-extrabold text-gray-900">Pricing</h1>
        <p className="text-lg text-gray-500 w-3/5 mt-2">
          We promise to keep it free and pay for all costs for as long as we
          can. If you&apos;re in the first 25 users, we&apos;ll personally
          guarantee WalletBase free for life.
        </p>
      </div>
      <Card className="w-full max-w-sm mx-auto p-4 pb-16">
        <CardContent className="p-6 grid gap-4 relative">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-extrabold text-gray-900">
              Free
            </CardTitle>
            <CardDescription>
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
