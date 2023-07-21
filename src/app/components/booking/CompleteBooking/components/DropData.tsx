import { TableRow, TableCell } from "@/app/components/ui/table";
import { formatMoney } from "@/app/util/numbers";
import { Drops } from "@/types";
import React from "react";

export default function DropData({
  Drops,
  idx,
}: {
  Drops: Drops;
  idx: number;
}) {
  return (
    <TableRow>
      <TableCell className="font-medium">{idx + 1}</TableCell>
      <TableCell className="font-medium">{Drops.recipientName}</TableCell>
      <TableCell>{Drops.recipientNumber}</TableCell>
      <TableCell>{Drops.altRecipientNumber}</TableCell>
      <TableCell>{Drops.note}</TableCell>
      <TableCell className="">{Drops.address}</TableCell>
      <TableCell className="text-right">{formatMoney(Drops.price)}</TableCell>
    </TableRow>
  );
}
