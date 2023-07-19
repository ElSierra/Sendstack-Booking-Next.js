"use client";
import ReactCountryFlag from "react-country-flag";
export default function PhoneInput({
  label,
  name,
  placeholder,
  type,
}: {
  label: string;
  name:string;
  placeholder: string;
  type: string;
}) {
  return (
    <div className="w-full mb-2 md:mb-0">
      <label
        className="block tracking-wide text-gray-700 text-xs font-bold mb-[0.2rem]"
        htmlFor={label}
      >
        {label}
      </label>
      <div className=" flex w-full items-center px-2 bg-gray-200 text-gray-700 border rounded py-2 mb-[0.2rem] leading-tight focus:outline-none text-sm focus:bg-white">
        <ReactCountryFlag
          countryCode="NG"
          svg
 className='rounded-md'
          title="NG"
        />
        <input
          name={label}
          className="appearance-none px-2  focus:outline-none  bg-gray-200 "
          type={type}
          placeholder={placeholder}
        />
      </div>
      {/* <p className="text-red-500 text-xs italic">
      Please fill out this field.
    </p> */}
    </div>
  );
}
