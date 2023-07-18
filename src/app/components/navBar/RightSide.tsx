'use client';

import { formatMoney } from "@/app/util/numbers";
import { useGetBalanceQuery } from "@/store/api/getUserInfo";
import Image from "next/image";

export default function RightSide() {
  const balance = useGetBalanceQuery(null)
  console.log("🚀 ~ file: RightSide.tsx:8 ~ RightSide ~ balance:", balance)

  
  return (
    <div className="flex items-center gap-2 rsm:hidden">
      <Image
        src={"/placeholder.png"}
        alt="profile pic"
        width={80}
        height={80}
        className="rounded-full w-8 h-8"
      />
      <p className="text-sm">{formatMoney(balance.data?.data?.balance|| 0)}</p>
    </div>
  );
}
