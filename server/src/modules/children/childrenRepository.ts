import databaseClient from "../../../database/client";
import type { Rows } from "../../../database/client";

class childrenRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM children");
    return rows;
  }
}

export default new childrenRepository();
