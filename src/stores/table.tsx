import { makeAutoObservable } from "mobx";

class TableStore {
  search: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  setSearch = (search: string) => {
    this.search = search;
  };

  clearSearch = () => {
    this.search = "";
  };
}

const tableStore = new TableStore();

export default tableStore;
