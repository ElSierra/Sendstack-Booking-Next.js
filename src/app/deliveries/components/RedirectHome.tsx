"use client";
import { Loader2 } from "lucide-react";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RedirectHome() {
  const Icons = {
    spinner: Loader2,
  };
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="absolute top-20 left-20 right-20 bottom-20 items-center flex justify-center">
      <Icons.spinner className="animate-spin" />
    </div>
  );
}
