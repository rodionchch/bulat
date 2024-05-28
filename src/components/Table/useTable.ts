import { useEffect, useRef, useState } from "react";

import { getDataSlice, setInitialState } from "./helpers";
import ServersService from "api/service/Servers";
import { TableDataType } from "./Table.types";
import tableStore from "stores/table";
import searchByName from "utils/searchByName";
import useDebounce from "hooks/useDebounce";

const useTable = () => {
  const { search } = tableStore;
  const data = useRef<TableDataType[]>([]);
  const searchData = useRef<TableDataType[] | null>(null);
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

  const debouncedSearchTerm = useDebounce(search, 300);

  useEffect(() => {
    if (debouncedSearchTerm) {
      searchData.current = searchByName(data.current, debouncedSearchTerm);
      setState(setInitialState(searchData.current));
    } else {
      searchData.current = null;

      setState(setInitialState(data.current));
    }
    if (viewPortElement.current) {
      viewPortElement.current.scrollTop = 0;
    }
  }, [debouncedSearchTerm]);

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
      data: searchData.current ? searchData.current : data.current,
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
    searchData: searchData?.current,
  };
};

export default useTable;
