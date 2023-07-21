import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react";
import { Loader2 } from "lucide-react";

export default function Button({
  children,
  className,
  onClick,
  props,
  loading,
}: {
  children: ReactNode;
  loading?: boolean;
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
  const Icons = {
    spinner: Loader2,
  };
  return (
    <button
      onClick={onClick}
      className={`${props?.disabled || loading ? "bg-[#424242]" : "bg-[#192528]"} ${
        props?.disabled || loading  ? "" : "hover:bg-blue-700"
      } text-white font-bold py-2 px-4 rounded  ${className}`}
      {...props}
    >
      {loading ? <div className="w-full flex items-center flex-col"><Icons.spinner className="animate-spin" /></div> : children}
    </button>
  );
}
