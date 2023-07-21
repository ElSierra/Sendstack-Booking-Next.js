"use client";

import { useState } from "react";
import { Calendar } from "../../../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../../../ui/popover";
import { Calendar as CalenderIcon } from "iconsax-react";
import { formatDate } from "@/app/util/date";
export default function DatePicker({
  label,
  date,
  handleDate,
}: {
  label: string;
  date: Date | undefined;
  handleDate: (e: any) => void;
}) {
  return (
    <div>
      <Popover>
        <label
          className="block tracking-wide text-gray-700 text-xs font-bold mb-[0.2rem]"
          htmlFor={"pickupDate"}
        >
          {label}
        </label>
        <PopoverTrigger className="appearance-none flex w-full bg-gray-200 text-gray-700 border rounded py-[0.2rem] px-4 mb-[0.2rem] leading-tight focus:outline-none text-sm focus:bg-white">
          <div className="flex justify-between items-center w-full">
            <p>{formatDate(date || new Date())}</p>
            <div>
              <CalenderIcon variant="Bulk" />
            </div>
          </div>
        </PopoverTrigger>

        <PopoverContent>
          <Calendar
            mode="single"
            selected={date}
            onSelect={(e: any) => {
              handleDate(e);
            }}
            className="rounded-md "
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
