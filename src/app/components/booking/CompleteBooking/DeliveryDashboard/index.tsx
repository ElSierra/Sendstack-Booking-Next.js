'use client'
import React, { useEffect, useState } from "react";
import TableComponent from "../components/Table";
import { Card, DirectDown } from "iconsax-react";
import PickupCard from "../components/PickupCard";
import TotalText from "../components/TotalText";
import TransitionWrapper from "@/app/components/global/Transition";

export default function DeliveryDashboard() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <TransitionWrapper show={show}>
      <div className="w-full  border-2 rounded-lg p-2 border-dashed ">
        <div className="flex items-center  mb-5 gap-2">
          <Card size={"20"} variant="Bulk" />
          <h1 className="font-bold">Complete Booking</h1>
        </div>
        <PickupCard />
        <TableComponent />
        <TotalText />
      </div>
    </TransitionWrapper>
  );
}
