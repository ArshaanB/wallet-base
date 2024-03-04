"use client";
import { useCallback, useEffect, useState } from "react";
import { createClient } from "../utils/supabase/client";
import { User } from "@supabase/gotrue-js";

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

export function ProfileForm({ user }: { user: User }) {
  const supabase = createClient();

  const [loading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);
  const [evmAddr, setEvmAddr] = useState<string | null>(null);
  const [svmAddr, setSvmAddr] = useState<string | null>(null);
  const [btcAddr, setBtcAddr] = useState<string | null>(null);

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

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
    } catch (error) {
      console.log("Error loading user data!");
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  useEffect(() => {
    getProfile();
  }, [user, getProfile]);

  async function updateProfile({
    firstName,
    lastName,
    evmAddr,
    svmAddr,
    btcAddr
  }: {
    firstName: string | null;
    lastName: string | null;
    evmAddr: string | null;
    svmAddr: string | null;
    btcAddr: string | null;
  }) {
    try {
      setLoading(true);

      const { error } = await supabase.from("profiles").upsert({
        id: user?.id as string,
        first_name: firstName,
        last_name: lastName,
        evm_addr: evmAddr,
        svm_addr: svmAddr,
        btc_addr: btcAddr,
        updated_at: new Date().toISOString()
      });
      if (error) throw error;
      console.log("Profile updated!");
    } catch (error) {
      console.log("Error updating the data!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>
          Update your profile information. Changes will be reflected across the
          platform.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="first-name">First Name</Label>
          <Input
            id="first-name"
            type="text"
            placeholder="Enter your First Name"
            value={firstName || ""}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last-name">Last Name</Label>
          <Input
            id="last-name"
            type="text"
            placeholder="Enter your Last Name"
            value={lastName || ""}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="Enter your Email"
            type="email"
            value={user?.email}
            disabled
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="evm-address">Optional: EVM Address</Label>
          <Input
            id="evm-address"
            placeholder="Enter your EVM Address"
            type="text"
            value={evmAddr || ""}
            onChange={(e) => setEvmAddr(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="svm-address">Optional: SVM Address</Label>
          <Input
            id="svm-address"
            placeholder="Enter your SVM Address"
            type="text"
            value={svmAddr || ""}
            onChange={(e) => setSvmAddr(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="bitcoin-address">Optional: Bitcoin Address</Label>
          <Input
            id="bitcoin-address"
            placeholder="Enter your Bitcoin Address"
            type="text"
            value={btcAddr || ""}
            onChange={(e) => setBtcAddr(e.target.value)}
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button
          variant={"dark"}
          className="w-full"
          onClick={() =>
            updateProfile({ firstName, lastName, evmAddr, svmAddr, btcAddr })
          }
          disabled={loading}
        >
          {loading ? "Loading ..." : "Save"}
        </Button>
      </CardFooter>
    </Card>
  );
}
