import { TableDataType } from "components/Table/Table.types";

const searchByName = (data: TableDataType[], search: string) => {
  return data.filter((item) =>
    item?.serverName.toLowerCase().includes(search.toLowerCase())
  );
};

export default searchByName;
