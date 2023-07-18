import React, { ReactNode } from "react";

export default function Button({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#192528] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {children}
    </button>
  );
}
