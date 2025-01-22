import databaseClient from "../../../database/client";

import type { Rows } from "../../../database/client";

class ParentRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM parent");

    return rows;
  }

  async readEmailWithPassword(email: string) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from parent where email = ?",
      [email],
    );

    return rows;
  }
}

export default new ParentRepository();
