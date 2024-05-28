import ServersService from "api/service/Servers";
import { observer } from "mobx-react-lite";
import tableStore from "stores/table";

const Table = () => {
  const { search } = tableStore;

  ServersService.getServers().then((response) => {
    console.log("=======>", response.data._id);
  });

  return <>Table: {search}</>;
};

export default observer(Table);
