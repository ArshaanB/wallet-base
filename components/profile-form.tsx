"use client";
import { useCallback, useEffect, useState, ReactNode } from "react";
import { useMutation } from "@tanstack/react-query";
import { createClient } from "../utils/supabase/client";
import { User } from "@supabase/gotrue-js";
import { ArrowPathIcon, XMarkIcon, CheckIcon } from "../assets/icons";
import { ButtonVariant } from "@/components/ui/button";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type ProfileData = {
  firstName: string;
  lastName: string;
  evmAddr?: string;
  svmAddr?: string;
  btcAddr?: string;
};

export function ProfileForm({ user }: { user: User }) {
  const supabase = createClient();

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [evmAddr, setEvmAddr] = useState<string>("");
  const [svmAddr, setSvmAddr] = useState<string>("");
  const [btcAddr, setBtcAddr] = useState<string>("");

  const mutation = useMutation({
    mutationFn: (data: ProfileData) =>
      fetch("/api/profile/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
  });

  const getProfile = useCallback(async () => {
    const { data, error, status } = await supabase
      .from("profiles")
      .select(`first_name, last_name, evm_addr, svm_addr, btc_addr`)
      .eq("id", user?.id)
      .single();

    if (error && status !== 406) {
      throw error;
    }

    if (data) {
      setFirstName(data.first_name);
      setLastName(data.last_name);
      setEvmAddr(data.evm_addr);
      setSvmAddr(data.svm_addr);
      setBtcAddr(data.btc_addr);
    }
  }, [user, supabase]);

  useEffect(() => {
    getProfile();
  }, [user, getProfile]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const firstName = event.currentTarget.firstName.value;
    const lastName = event.currentTarget.lastName.value;
    const evmAddr = event.currentTarget.evmAddr.value;
    const svmAddr = event.currentTarget.svmAddr.value;
    const btcAddr = event.currentTarget.btcAddr.value;
    mutation.mutate({ firstName, lastName, evmAddr, svmAddr, btcAddr });
  }

  let saveButtonColor: ButtonVariant = "dark";
  let saveButtonContents: ReactNode = "Save";
  if (mutation.isPending) {
    saveButtonColor = "yellow";
    saveButtonContents = <ArrowPathIcon />;
  } else if (mutation.isError) {
    saveButtonColor = "destructive";
    saveButtonContents = <XMarkIcon />;
  } else if (mutation.isSuccess) {
    saveButtonColor = "green";
    saveButtonContents = <CheckIcon />;
  }

  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle className="text-3xl">Profile</CardTitle>
        <CardDescription>
          Update your profile information. Changes will be reflected across the
          platform.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Enter your First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Enter your Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="Enter your Email"
              type="email"
              value={user?.email}
              disabled
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="evmAddr">EVM Address (Optional)</Label>
            <Input
              id="evmAddr"
              name="evmAddr"
              placeholder="Enter your EVM Address"
              type="text"
              value={evmAddr}
              onChange={(e) => setEvmAddr(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="svmAddr">SVM Address (Optional)</Label>
            <Input
              id="svmAddr"
              name="svmAddr"
              placeholder="Enter your SVM Address"
              type="text"
              value={svmAddr}
              onChange={(e) => setSvmAddr(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="btcAddr">Bitcoin Address (Optional)</Label>
            <Input
              id="btcAddr"
              name="btcAddr"
              placeholder="Enter your Bitcoin Address"
              type="text"
              value={btcAddr}
              onChange={(e) => setBtcAddr(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button
            type="submit"
            variant={saveButtonColor}
            className="w-full"
            disabled={mutation.isPending}
          >
            {saveButtonContents}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

// TODO: Disable Button and show "Loading..." instead of Save when form is in
// loading state when page loads or when form is submitted.
