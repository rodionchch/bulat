import { observer } from "mobx-react-lite";
import {
  Table as TableMUI,
  TableBody,
  TableContainer,
  Paper,
} from "@mui/material";

import Loader from "components/Loader";
import { TableDataType } from "./Table.types";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import useTable from "./useTable";
import TableNotFound from "./TableNotFound";
import EnhancedTable from "./Demo";

const Table = () => {
  const {
    state,
    loading,
    handleScroll,
    viewPortElement,
    searchData,
    handleRequestSort,
    orderBy,
    order,
  } = useTable();

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {searchData?.length === 0 ? (
        <TableNotFound>Сервер не найден</TableNotFound>
      ) : (
        <TableContainer
          component={Paper}
          sx={{ height: state.viewPortHeight }}
          onScroll={handleScroll}
          ref={viewPortElement}
        >
          <TableMUI
            sx={{ minWidth: 650 }}
            aria-label="simple table"
            stickyHeader
          >
            <TableHead
              onRequestSort={handleRequestSort}
              orderBy={orderBy}
              order={order}
            />
            <TableBody>
              <div style={{ height: state.topPaddingHeight }}></div>
              {state.rows?.map((row: TableDataType) => (
                <TableRow key={row.description} row={row} />
              ))}
              <div style={{ height: state.bottomPaddingHeight }}></div>
            </TableBody>
          </TableMUI>
        </TableContainer>
      )}
    </>
  );
};

export default observer(Table);
