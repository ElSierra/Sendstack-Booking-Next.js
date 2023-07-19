import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react";

export default function Button({
  children,
  className,
  onClick,
  props,
}: {
  children: ReactNode;
  className: string;
  props?: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  onClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    idx?: number
  ) => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`${props?.disabled ? "bg-[#8f8f8f]" : "bg-[#192528]"} ${
        props?.disabled ? "" : "hover:bg-blue-700"
      } text-white font-bold py-2 px-4 rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
