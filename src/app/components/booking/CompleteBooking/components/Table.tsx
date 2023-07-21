import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/app/components/ui/table";
import { useAppSelector } from "@/store/hooks";
import DropData from "./DropData";

export default function TableComponent() {
  const deliveryDrops = useAppSelector((state) => state.deliveryDetails.drops);
  return (
    <div className="flex flex-col  w-full rounded-lg p-4 border-2 border-dashed ">
      <h1 className="font-bold mb-3">Drop off</h1>
      <Table>
        <TableHeader className="bg-[#f9f9f9] rounded-[300px]">
          <TableRow className="bg-[#f9f9f9] p-8">
            <TableHead></TableHead>
            <TableHead>Recipient</TableHead>
            <TableHead>Number</TableHead>
            <TableHead>Alt Number</TableHead>
            <TableHead className="">Note</TableHead>
            <TableHead className="">Address</TableHead>
            <TableHead className="">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {deliveryDrops.map((Drops, idx) => (
            <DropData Drops={Drops} key={idx} idx={idx}/>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
