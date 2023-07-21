"use client";

import { useAppSelector } from "@/store/hooks";
import Empty from "../components/Empty";
import DeliveryDashboard from "../DeliveryDashboard";

export default function Home() {
  const step = useAppSelector((state) => state.formStep);
  const isCompleteBookingStep = !!(step.idx === "2");
  return <>{!isCompleteBookingStep ? <Empty /> : <DeliveryDashboard />}</>;
}
