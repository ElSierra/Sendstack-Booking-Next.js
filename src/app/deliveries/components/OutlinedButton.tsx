import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
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
      className={`${
        props?.disabled || loading ? "bg-[transparent]" : "bg-[transparent]"
      } ${
        props?.disabled || loading ? "" : "hover:bg-slate-300"
      } border-[1.5px] flex items-center justify-between mb-[0.1rem]  text-black text-xs font-bold py-1 px-2 rounded  ${className}`}
      {...props}
    >
      {loading ? (
        <div className="w-full flex items-center flex-col">
          <Icons.spinner className="animate-spin" />
        </div>
      ) : (
        <div className="flex items-center">{children}</div>
      )}
    </button>
  );
}
