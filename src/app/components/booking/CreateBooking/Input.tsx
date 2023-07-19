"use client";

import { Transition } from "@headlessui/react";

export default function Input({
  label,
  valid,
  errorMsg,
  props,
}: {
  label: string;
  errorMsg:string,
  valid?: boolean;
  props?: React.HTMLProps<HTMLInputElement>;
}) {
  return (
    <div className="w-full mb-2 md:mb-0">
      <label
        className="block tracking-wide text-gray-700 text-xs font-bold mb-[0.2rem]"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        name={label}
        className={`appearance-none flex w-full bg-gray-200 text-gray-700 border rounded ${
          !valid ? "border-red-600" : ""
        } py-2 px-4 mb-[0.2rem] leading-tight focus:outline-none text-sm focus:bg-white`}
        {...props}
      />
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
