import React from "react";

export default function TotalText() {
  return (
    <div className="flex w-full justify-end text-sm my-2 ">
        <div className="flex-col w-[50%]">
      <div className=" flex justify-between">
        <p>Delivery Fee:</p>
        <p>2000</p>
        
      </div>
      <div className=" flex justify-between">
        <p>Wallet Balance:</p>
        <p>0</p>
        
      </div></div>
    </div>
  );
}
