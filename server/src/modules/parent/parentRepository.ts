import databaseClient from "../../../database/client";

import type { Rows } from "../../../database/client";

class parentRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM parent");

    return rows;
  }
}

export default new parentRepository();
