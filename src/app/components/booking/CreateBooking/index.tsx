"use client";
import React, { useEffect, useState } from "react";

import AddUserDetails from "./AddUserDetails";
import AddDelivery from "./AddDeliveryDetails";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Cookies from "js-cookie";
import { useGetDeliveryLocationQuery } from "@/store/api/sendStackApi";
import Start from "./Start";
import { clearDeliveryList } from "@/store/local/deliveryList";

export default function CreateBooking() {
  const pageIdx = useAppSelector((state) => state.formStep.idx);
  const dispatch = useAppDispatch();
  const auth = {
    appId: "0273264",
    appSecret: "CV5KFQ1ND243N66SPCCXD3W633V27K5K",
  };
  useGetDeliveryLocationQuery(null);

  useEffect(() => {
    dispatch(clearDeliveryList());
  }, [dispatch]);

  Cookies.set("ss-auth", JSON.stringify(auth));
  const bookingComponent = () => {
    switch (Number(pageIdx)) {
      case 0:
        return <AddUserDetails />;

      case 1:
        return <AddDelivery />;
      default:
        return <Start />;
    }
  };
  return bookingComponent();
}
