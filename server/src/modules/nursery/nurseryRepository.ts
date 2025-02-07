import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";
import type { Nursery } from "../../types/modules/Nursery";

class NurseryRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM nursery",
      [],
    );

    return rows;
  }

  async readById(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT n_name FROM nursery WHERE id = ?",
      [id],
    );

    return rows[0] || null;
  }

  async create(nursery: Omit<Nursery, "id">) {
    const [result] = await databaseClient.query<Result>(
      "insert into nursery (n_name, n_address, n_zipCode, n_phoneNumber, n_capacity, n_availability, n_gestion, n_minAge, n_maxAge, n_isDisabled) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        nursery.name,
        nursery.address,
        nursery.zipCode,
        nursery.phoneNumber,
        nursery.capacity,
        nursery.availability,
        nursery.gestion,
        nursery.minAge,
        nursery.maxAge,
        nursery.isDisabled,
      ],
    );

    return result.insertId;
  }
}

export default new NurseryRepository();
