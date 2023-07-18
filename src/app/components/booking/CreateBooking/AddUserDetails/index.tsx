import Button from "@/app/components/global/Button";

import React from "react";
import DatePicker from "../DatePicker";
import TextArea from "../TextArea";
import Input from "../Input";

export default function AddUserDetails({handleClick}: {handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, idx?:number)=>void}) {
 
  return (
    <form>
      <div className="w-full h-full flex flex-col">
        <h1 className=" font-bold">Send Item</h1>
        <p className="text-xs">Input your details </p>
        <hr className="my-2"/>
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
