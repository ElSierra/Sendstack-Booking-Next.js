"use client";
import { Transition } from "@headlessui/react";
import ReactCountryFlag from "react-country-flag";
export default function PhoneInput({
  label,
  valid,
  errorMsg,
  props,
}: {
  label: string;
  errorMsg:string;
  valid: boolean;
  props?: React.HTMLProps<HTMLInputElement>;
}) {
  return (
    <div className="w-full mb-2 md:mb-0">
      <label
        className="block tracking-wide text-gray-700 text-xs font-bold mb-[0.2rem]"
        htmlFor={label}
      >
        {label}<span className="text-red-800">*</span>
      </label>
      <div
        className={`flex w-full items-center overflow-hidden  ${
          !valid ? "border-red-600" : ""
        } bg-gray-200 text-gray-700 border rounded  mb-[0.2rem] leading-tight focus:outline-none text-sm focus:bg-white`}
      >
        <ReactCountryFlag
          countryCode="NG"
          svg
          height={200}
          className="rounded-md m-2"
          title="NG"
        />
        <input
          name={label}
          type="tel"
          className="appearance-none px-1 w-full py-2 h-full focus:outline-none  bg-gray-200  focus:bg-white"
          {...props}
        />
      </div>
      <Transition
        show={!valid}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <p className="text-red-500 text-xs italic">
          {errorMsg}
        </p>{" "}
      </Transition>
    </div>
  );
}
