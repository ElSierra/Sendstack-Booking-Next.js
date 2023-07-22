import { CalendarCircle } from "iconsax-react";
import React from "react";

export default function TimelineItem() {
  return (
    <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
               <CalendarCircle color='#3C0056' className='animate-pulse' variant="Bulk"/>
               <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pr-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.3.0</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 5, 2022</time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
            </div>
        </li>
  );
}
