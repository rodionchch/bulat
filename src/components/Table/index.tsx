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

const Table = () => {
  const { state, loading, handleScroll, viewPortElement } = useTable();

  return (
    <>
      {loading ? (
        <Loader />
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
            <TableHead />
            <TableBody>
              <div style={{ height: state.topPaddingHeight }}></div>
              {state.rows.map((row: TableDataType) => (
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
