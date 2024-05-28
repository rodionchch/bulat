import fetchMock from "api/mocks/fetchMock";
import { ServersResponse } from "api/models/ServersResponse";

class ServersService {
  public static getServers() {
    return fetchMock.get<ServersResponse>("/servers");
  }
}

export default ServersService;
