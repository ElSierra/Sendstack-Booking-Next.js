"use client";

import { useAppSelector } from "@/store/hooks";
import Empty from "../components/Empty";
import DeliveryDashboard from "../DeliveryDashboard";
import Completed from "../components/Completed";

export default function Home() {
  const step = useAppSelector((state) => state.formStep);
  const isCompleteBookingStep = !!(step.idx === "2");
  return <>{isCompleteBookingStep ? <DeliveryDashboard />: step.idx === "3"? <Completed/> : <Empty />}</>;
}


