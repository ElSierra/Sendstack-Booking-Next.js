import React from "react";
import Input from "./Input";

export default function DropComponent() {
  return (
    <div className="border-2 rounded-lg p-2 mt-2">
      <Input type="text" label="Name" placeholder="Your Name" />
      <Input type="text" label="Number" placeholder="09012345678" />
      <Input type="text" label="Address" placeholder="10, John Street," />
    </div>
  );
}
