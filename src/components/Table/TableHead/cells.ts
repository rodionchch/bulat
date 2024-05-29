import { HeadCell } from "./TableHead.types";

export const headCells: readonly HeadCell[] = [
  {
    id: "index",
    numeric: true,
    label: "ID",
  },
  {
    id: "serverName",
    numeric: false,
    label: "Сервер",
  },
  {
    id: "company",
    numeric: false,
    label: "Компания",
  },
  {
    id: "isActive",
    numeric: false,
    label: "Статус",
    align: "center" as "center",
  },
  {
    id: "registered",
    numeric: false,
    label: "Дата",
    align: "center" as "center",
  },
  {
    id: "description",
    numeric: false,
    label: "Описание",
  },
];
