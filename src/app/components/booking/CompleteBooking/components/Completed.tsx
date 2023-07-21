"use client";
import Lottie from "lottie-react";
import animationData from "../assets/bike.json";
import Button from "@/app/components/global/Button";
import Link from "next/link";

export default function Completed() {
  return (
    <div className="flex flex-col items-center">
      <Lottie
        style={{ height: "300px" }}
        animationData={animationData}
       size={0}
      />
      <Link href={"deliveries"}><Button onClick={()=>null} className="">Check Your Delivery</Button></Link>
    </div>
  );
}
