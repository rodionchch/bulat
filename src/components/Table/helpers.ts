import { Sort, TableDataType } from "./Table.types";

const settings = {
  ITEM_HEIGHT: 53,
  AMOUNT: 10,
};

export const getDataSlice = ({
  data,
  offset,
  limit,
}: {
  data: TableDataType[];
  offset: number;
  limit: number;
}) => {
  const rows = data;
  const start = offset;
  const end = Math.min(data?.length, limit + offset - 1);

  return rows.slice(start, end) ?? ([] as any[]);
};

export const setInitialState = (data: TableDataType[]) => {
  const maxIndex = data?.length;
  const viewPortHeight = settings.AMOUNT * settings.ITEM_HEIGHT; // Высота видимой области
  const totalHeight = maxIndex * settings.ITEM_HEIGHT; // Общая высота контейнера
  const bufferedItems = settings.AMOUNT + 4;
  const topPaddingHeight = 0;
  const bottomPaddingHeight = totalHeight - viewPortHeight;

  return {
    itemHeight: settings.ITEM_HEIGHT,
    viewPortHeight,
    totalHeight,
    bufferedItems,
    topPaddingHeight,
    bottomPaddingHeight,
    rows: getDataSlice({ data, offset: 0, limit: bufferedItems }),
  };
};

export const descendingComparator = <T>(a: T, b: T, orderBy: keyof T) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

export const getComparator = <Key extends keyof any>(
  order: Sort,
  orderBy: Key
): ((
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number) => {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

export const stableSort = <T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) => {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
};
