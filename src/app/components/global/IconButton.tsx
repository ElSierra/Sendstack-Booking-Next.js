import React, { ReactNode } from "react";

export default function IconButton({
  children,
  className,
  ariaLabel,
  onClick,
}: {
  children: ReactNode;
  className: string;
  ariaLabel: string;
  onClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    idx?: number
  ) => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`bg-[#192528] hover:bg-blue-700 text-white font-bold  rounded-lg w-fit  overflow-hidden  ${className}`}
    >
      {children}
    </button>
  );
}
