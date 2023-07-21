import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/app/components/ui/table";

export default function TableComponent() {
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
            <TableHead className="text-right">Address</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1.</TableCell>
            <TableCell className="font-medium">Isaac</TableCell>
            <TableCell>09067163987</TableCell>
            <TableCell>09067163987</TableCell>
            <TableCell className="text-right">
              24 Bisi Olatunji Street
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">1.</TableCell>
            <TableCell className="font-medium">Isaac</TableCell>
            <TableCell>09067163987</TableCell>
            <TableCell>09067163987</TableCell>
            <TableCell className="text-right">
              24 Bisi Olatunji Street
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
