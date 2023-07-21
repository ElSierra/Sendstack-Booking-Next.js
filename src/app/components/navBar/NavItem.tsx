import { usePathname } from "next/navigation";
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
  const isPath = !!(pathname === name);
  console.log("🚀 ~ file: NavItem.tsx:4 ~ NavItem ~ pathname:", pathname);
  return (
    <li>
      <a
        href="#"
        className={`flex gap-2 py-2 pl-3 text-sm pr-4 items-center ${
          isPath ? "text-[#0060e0] font-semibold" : "text-gray-400"
        } rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0`}
      >
        <Icon  size="16" color={isPath? "#0060e0":"#000000"} variant={isPath? "Bulk":"Outline"} />
        {title}
      </a>
    </li>
  );
}
