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
        <TableCell>Сервер</TableCell>
        <TableCell>Компания</TableCell>

        <TableCell align={"center"} padding={"none"}>
          Статус
        </TableCell>
        <TableCell align={"center"}>Дата</TableCell>
        <TableCell>Описание</TableCell>
      </TableRowMUI>
    </TableHeadMUI>
  );
};

export default TableHead;
