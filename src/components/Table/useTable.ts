import { useEffect, useRef, useState } from "react";
import ServersService from "api/service/Servers";

import { getDataSlice, setInitialState } from "./helpers";
import { TableDataType } from "./Table.types";

const useTable = () => {
  const data = useRef<TableDataType[]>([]);
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState({
    itemHeight: 0,
    viewPortHeight: 0,
    totalHeight: 0,
    bufferedItems: 0,
    topPaddingHeight: 0,
    bottomPaddingHeight: 0,
    rows: [] as TableDataType[],
  });

  useEffect(() => {
    ServersService.getServers()
      .then((response) => {
        data.current = response.data;
        setState(setInitialState(response.data));
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const viewPortElement = useRef<HTMLDivElement>(null);

  const handleScroll = ({
    currentTarget: { scrollTop },
  }: {
    currentTarget: { scrollTop: number };
  }) => {
    const { totalHeight, bufferedItems, itemHeight } = state;

    const index = Math.max(Math.floor(scrollTop / itemHeight) - 2, 0);

    const rows = getDataSlice({
      data: data.current,
      offset: index,
      limit: bufferedItems,
    });
    const topPaddingHeight = index * itemHeight;
    const bottomPaddingHeight =
      totalHeight - topPaddingHeight - rows.length * itemHeight;

    setState((prevState) => ({
      ...prevState,
      topPaddingHeight,
      bottomPaddingHeight,
      rows,
    }));
  };

  return {
    state,
    loading,
    handleScroll,
    viewPortElement,
  };
};

export default useTable;
