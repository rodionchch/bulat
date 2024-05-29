import { TableRow as TableRowMUI, TableCell, IconButton } from "@mui/material";
import { Settings } from "@mui/icons-material";

import { TableDataType } from "../Table.types";
import { TableCellStyle } from "./styles";

type TableRowProps = {
  row: TableDataType;
};

const TableRow = ({ row }: TableRowProps) => {
  return (
    <TableRowMUI sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell
        component="th"
        scope="row"
        sx={{ ...TableCellStyle, width: 75 }}
      >
        {row.index}
      </TableCell>

      <TableCell sx={TableCellStyle}>{row.serverName}</TableCell>
      <TableCell sx={TableCellStyle}>{row.company}</TableCell>

      <TableCell align={"center"} padding={"none"} sx={TableCellStyle}>
        {row.isActive ? "✅" : "❌"}
      </TableCell>
      <TableCell align={"center"} sx={TableCellStyle}>
        {row.registered?.slice(0, 10)}
      </TableCell>
      <TableCell sx={{ ...TableCellStyle, maxWidth: 200 }}>
        {row.description}
      </TableCell>
      <TableCell padding="none">
        <IconButton disabled size="small">
          <Settings />
        </IconButton>
      </TableCell>
    </TableRowMUI>
  );
};

export default TableRow;
