import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";
import type { Booking } from "../../types/modules/Booking";

class BookingRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM booking");
    return rows;
  }

  async readById(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM booking WHERE id = ?",
      [id],
    );
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
      "SELECT parent_id,nursery_id, children_id, booking_date, booking_range, status, ns_name, ns_image FROM booking INNER JOIN nursery ON nursery.id=booking.nursery_id WHERE parent_id = ?",
      [parentId],
    );
    return rows;
  }

  async readByNurseryId(nurseryId: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT booking_date, booking_range, status, c_first_name, c_last_name, c_gender, c_birth_date, c_allergies, p_first_name, p_last_name, p_job, p_address, p_zip_code, p_num_tel, p_mail, p_birth_date FROM booking JOIN parent ON parent.id = booking.parent_id JOIN children ON children.id = booking.children_id WHERE nursery_id = ?",
      [nurseryId],
    );
    return rows;
  }

  async updatedBooking(
    status: string,
    parent_id: number,
    children_id: number,
    nurseryId: number,
  ) {
    const [row] = await databaseClient.query<Result>(
      "UPDATE booking SET status = ? WHERE id = ? AND parent_id = ? AND children_id = ?",
      [status, nurseryId, parent_id, children_id],
    );

    return row.affectedRows;
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
