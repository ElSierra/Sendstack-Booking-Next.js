"use client";
import React, { useState } from "react";

import AddUserDetails from "./AddUserDetails";
import AddDelivery from "./AddDeliveryDetails";

export default function CreateBooking() {
  const [pageIdx, setPageIdx] = useState(0);
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    idx: number
  ) => {
    setPageIdx(idx);
    e.preventDefault();
  };

  const bookingComponent = () => {
    switch (pageIdx) {
      case 0:
        return <AddUserDetails handleClick={(e) => handleClick(e, 1)} />;

      case 1:
        return <AddDelivery />;
    }
  };
  return bookingComponent();
}
