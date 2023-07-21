"use client";

import { formatMoney } from "@/app/util/numbers";
import { useGetBalanceQuery } from "@/store/api/sendStackApi";
import { useAppSelector } from "@/store/hooks";
import Image from "next/image";

export default function RightSide() {
  useGetBalanceQuery(null);
  const balance = useAppSelector((state)=>state.user.bal)
  console.log("🚀 ~ file: RightSide.tsx:8 ~ RightSide ~ balance:", balance);

  return (
    <div className="flex items-center gap-2 rsm:hidden">
      <Image
        src={"/placeholder.png"}
        alt="profile pic"
        width={80}
        height={80}
        className="rounded-full w-8 h-8"
      />
      <p className="text-sm">{formatMoney(balance)}</p>
    </div>
  );
}
