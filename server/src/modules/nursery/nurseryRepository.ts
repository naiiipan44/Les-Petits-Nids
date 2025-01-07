import databaseClient from "../../../database/client";

import type { Rows } from "../../../database/client";

class nurseryRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM nursery");

    return rows;
  }
}

export default new nurseryRepository();
