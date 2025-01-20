import databaseClient from "../../../database/client";

import type { Rows } from "../../../database/client";

class userAppRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM userApp");

    return rows;
  }

  async readEmailWithPassword(email: string) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from user where email = ?",
      [email],
    );
  }
}

export default new userAppRepository();
