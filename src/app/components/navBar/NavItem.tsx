import { usePathname } from "next/navigation";
import Link from "next/link";
export default function NavItem({
  Icon,
  title,
  name,
}: {
  Icon: any;
  title: string;
  name: string;
}) {
  const pathname = usePathname();
  
  const isPath = !!(pathname === `/${name}`);
 
  return (
    <li>
      <Link
        href={`/${name}`}
        className={`flex gap-2 py-2 pl-3 text-sm pr-4 items-center ${
          isPath ? "text-[#731b99] font-semibold" : "text-gray-400"
        } rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#300642] md:p-0`}
      >
        <Icon  size="16" color={isPath? "#a313e0":"#000000"} variant={isPath? "Bulk":"Outline"} />
        {title}
      </Link>
    </li>
  );
}
