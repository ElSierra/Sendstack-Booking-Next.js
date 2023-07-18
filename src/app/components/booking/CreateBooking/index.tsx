"use client";
import React, { useState } from "react";
import Input from "./Input";
import DatePicker from "./DatePicker";
import TextArea from "./TextArea";
import DropComponent from "./DropComponent";
import Button from "../../Button";

export default function CreateBooking() {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
  };
  const [pageIdx, setPageIdx] = useState(0);
  return (
    <form>
      <div className="w-full h-full flex flex-col">
        <h1 className="mb-4 font-bold">Send Item</h1>
        <Input type="text" label="Name" placeholder="Your Name" />
        <Input type="text" label="Number" placeholder="09012345678" />
        <Input type="text" label="Address" placeholder="10, John Street," />
        <TextArea />
        <DatePicker label="Pickup Date" />
        <Button onClick={handleClick} className="mt-6">
          Continue
        </Button>
      </div>
    </form>
  );
}
