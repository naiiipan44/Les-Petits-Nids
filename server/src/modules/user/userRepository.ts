import databaseClient from "../../../database/client";

import type { Rows } from "../../../database/client";

class userRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM user");

    return rows;
  }
}

export default new userRepository();
