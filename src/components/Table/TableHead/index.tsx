import {
  TableHead as TableHeadMUI,
  TableCell,
  TableRow as TableRowMUI,
} from "@mui/material";

const TableHead = () => {
  return (
    <TableHeadMUI>
      <TableRowMUI>
        <TableCell>ID</TableCell>
        <TableCell>Server Name</TableCell>
        <TableCell>Company</TableCell>

        <TableCell align={"center"} padding={"none"}>
          Status
        </TableCell>
        <TableCell align={"center"}>Date</TableCell>
        <TableCell>Description</TableCell>
      </TableRowMUI>
    </TableHeadMUI>
  );
};

export default TableHead;
