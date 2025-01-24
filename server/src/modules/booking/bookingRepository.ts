import databaseClient from "../../../database/client";
import type { Rows } from "../../../database/client";

class BookingRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM booking");
    return rows;
  }
}

export default new BookingRepository();
