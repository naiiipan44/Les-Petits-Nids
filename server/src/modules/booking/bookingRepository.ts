import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

interface Booking {
  id: number;
  parent_id: number;
  nursery_id: number;
  children_id: number;
  booking_date: string;
  booking_range: boolean;
}

class BookingRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM booking");
    return rows;
  }

  async create(booking: Omit<Booking, "id">) {
    const { parent_id, nursery_id, children_id, booking_date, booking_range } =
      booking;
    const [result] = await databaseClient.query<Result>(
      "insert into booking (parent_id, nursery_id, children_id, booking_date, booking_range) values (?, ?, ?, ?, ?)",
      [parent_id, nursery_id, children_id, booking_date, booking_range],
    );

    return result.insertId;
  }
}

export default new BookingRepository();
