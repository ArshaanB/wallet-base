import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SignUpConfirmation() {
  return (
    <main className="flex flex-col items-center justify-center py-24 sm:px-6 lg:px-8 dark:bg-gray-900">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-200">
            Congratulations!
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Your registration was successful. Please check your email for a
            confirmation message.
          </p>
        </div>
        <div className="mt-5 text-center">
          <p className="my-4 text-center text-sm text-gray-600 dark:text-gray-400">
            If you&apos;re having problems, please contact us below.
          </p>
          <Link href="mailto:arshaan.marketing@gmail.com">
            <Button className="w-full" variant="outline">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
