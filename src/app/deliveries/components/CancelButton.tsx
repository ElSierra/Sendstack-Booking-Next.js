import  {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react";
import { Loader2 } from "lucide-react";

export default function CancelButton({
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
      disabled ={props?.disabled || loading}
      className={`${props?.disabled || loading ? "bg-[#424242]" : " bg-[#F04438]"} ${
        props?.disabled || loading  ? "" : "hover:bg-red-400"
      } text-white font-bold py-2 px-4 rounded  ${className}`}
      {...props}
    >
      {loading ? <div className="w-full flex items-center flex-col"><Icons.spinner className="animate-spin" /></div> : children}
    </button>
  );
}
