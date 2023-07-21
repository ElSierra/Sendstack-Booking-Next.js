"use client";
import Button from "@/app/components/global/Button";
import { useAppDispatch } from "@/store/hooks";
import { setStep } from "@/store/local/formStep";

export default function Start() {
  const dispatch = useAppDispatch()
  return (
    <div className="flex items-center w-full flex-col">
      <Button className="" onClick={()=>{
        dispatch(setStep("0"))
      }}>Make a new booking</Button>
    </div>
  );
}
