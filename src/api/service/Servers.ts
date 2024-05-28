import fetchMock from "api/mocks/fetchMock";
import { ServersResponse } from "api/models/ServersResponse";

class ServersService {
  /**
   * Получение списка серверов.
   * @returns ServersResponse
   * @throws ApiError
   */

  public static getServers() {
    return fetchMock.get<ServersResponse[]>("/servers");
  }
}

export default ServersService;
