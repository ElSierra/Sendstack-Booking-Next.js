"use client";

export default function TextArea() {
  return (
    <div>
      <label
        className="block tracking-wide text-gray-700 text-xs font-bold mb-[0.2rem]"
        htmlFor={"note"}
      >
        Note
      </label>
      <textarea
        name="note"
        className="appearance-none resize-none flex w-full bg-gray-200 text-gray-700 border rounded py-[0.2rem] px-4 mb-[0.2rem] leading-tight focus:outline-none text-sm focus:bg-white"
        placeholder="Please be prompt"
      />
    </div>
  );
}
