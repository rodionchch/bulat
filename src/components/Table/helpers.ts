import { TableDataType } from "./Table.types";

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
