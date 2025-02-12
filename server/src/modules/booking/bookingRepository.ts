import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";
import type { Booking } from "../../types/modules/Booking";

class BookingRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM booking");
    return rows;
  }

  async readBookParentAndChildren() {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT booking_range, booking_date, p_first_name, p_last_name, c_first_name, c_last_name FROM booking JOIN parent ON booking.parent_id = parent.id JOIN children ON booking.children_id = children.id",
    );
    return rows;
  }

  async readByParentId(parentId: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM booking WHERE parent_id = ?",
      [parentId],
    );
    return rows;
  }

  async readByNurseryId(nurseryId: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM booking WHERE nursery_id = ?",
      [nurseryId],
    );
    return rows;
  }

  async create(booking: Omit<Booking, "id">) {
    const {
      parent_id,
      nurseryId,
      children_id,
      bookingDate,
      bookingRange,
      status,
    } = booking;
    const [result] = await databaseClient.query<Result>(
      "insert into booking (parent_id, nursery_id, children_id, booking_date, booking_range, status) values (?, ?, ?, ?, ?, ?)",
      [parent_id, nurseryId, children_id, bookingDate, bookingRange, status],
    );

    return result.insertId;
  }
}

export default new BookingRepository();
