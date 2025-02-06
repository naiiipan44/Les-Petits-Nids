import databaseClient from "../../../database/client";
import type { Rows } from "../../../database/client";

class NurseryRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM nursery");
    return rows;
  }

  async readById(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM nursery WHERE id = ?",
      [id],
    );

    return rows[0] || null;
  }
}

export default new NurseryRepository();
