import databaseClient from "../../../database/client";

import type { Rows } from "../../../database/client";

class userAppRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM userApp");

    return rows;
  }
}

export default new userAppRepository();
