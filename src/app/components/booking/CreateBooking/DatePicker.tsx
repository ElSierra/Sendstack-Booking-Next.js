"use client";
export default function DatePicker({label}:{label:string}) {
  return (
    <div >
   <label
        className="block tracking-wide text-gray-700 text-xs font-bold mb-[0.2rem]"
        htmlFor={'pickupDate'}
      >
   {label}
    </label>
    <input
       className="appearance-none flex w-full bg-gray-200 text-gray-700 border rounded py-[0.2rem] px-4 mb-[0.2rem] leading-tight focus:outline-none text-sm focus:bg-white"
      type="date"
      name="pickupDate"
    ></input>
  </div>
  )
}
