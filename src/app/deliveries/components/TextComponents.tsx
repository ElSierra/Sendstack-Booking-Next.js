import React, { ReactNode } from "react";

export default function TextComponents({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full items-center gap-2 text-xs">
      <p className="text-ellipsis  items-center w-full whitespace-nowrap overflow-hidden">
        {children}
      </p>
    </div>
  );
}
