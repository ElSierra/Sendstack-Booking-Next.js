"use client";
import React, { useState } from "react";

import AddUserDetails from "./AddUserDetails";
import AddDelivery from "./AddDeliveryDetails";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Cookies from "js-cookie";

export default function CreateBooking() {
  const pageIdx = useAppSelector((state) => state.formStep.idx);
  const auth = {
    appId: "0273264",
    appSecret: "CV5KFQ1ND243N66SPCCXD3W633V27K5K",
  };
  
  Cookies.set("ss-auth", JSON.stringify(auth));
  const bookingComponent = () => {
    switch (Number(pageIdx)) {
      case 0:
        return <AddUserDetails />;

      case 1:
        return <AddDelivery />;
    }
  };
  return bookingComponent();
}
