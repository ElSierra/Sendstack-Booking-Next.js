"use client";
export default function Input({
  label,
  placeholder,
  type,
  props,
}: {
  label: string;
  placeholder: string;
  type: string;
  props?: React.HTMLProps<HTMLInputElement>
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
        className="appearance-none flex w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-[0.2rem] leading-tight focus:outline-none text-sm focus:bg-white"
        type={type}
        placeholder={placeholder}
        {...props}
      />
      {/* <p className="text-red-500 text-xs italic">
      Please fill out this field.
    </p> */}
    </div>
  );
}
