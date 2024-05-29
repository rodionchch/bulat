import {
  TableHead as TableHeadMUI,
  TableCell,
  TableRow as TableRowMUI,
  TableSortLabel,
} from "@mui/material";

import { headCells } from "./cells";
import { Data } from "./TableHead.types";
import { Sort } from "../Table.types";

type TableHeadProps = {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;

  order: Sort;
  orderBy: string;
};

const TableHead: React.FC<TableHeadProps> = ({
  orderBy,
  order,
  onRequestSort,
}) => {
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHeadMUI>
      <TableRowMUI>
        {headCells?.map((cell) => (
          <TableCell key={cell.id} align={cell.align || "left"}>
            <TableSortLabel
              active={orderBy === cell.id}
              direction={orderBy === cell.id ? order : "asc"}
              onClick={createSortHandler(cell.id)}
            >
              {cell.label}
            </TableSortLabel>
          </TableCell>
        ))}

        <TableCell />
      </TableRowMUI>
    </TableHeadMUI>
  );
};

export default TableHead;
