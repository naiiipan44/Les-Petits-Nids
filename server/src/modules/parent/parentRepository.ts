import databaseClient, {
  type Result,
  type Rows,
} from "../../../database/client";
import type { Parent } from "../../types/modules/Parent";

class ParentRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM parent");

    return rows;
  }

  async readParentId(firstName: string, lastName: string) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT id FROM parent WHERE p_first_name = ? AND p_last_name = ?",
      [firstName, lastName],
    );

    return rows[0];
  }

  async readEmailWithPassword(email: string) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from parent where email = ?",
      [email],
    );

    return rows;
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "delete from parent where id = ?",
      [id],
    );

    return result.affectedRows;
  }
  async create(parent: Parent) {
    const {
      firstName,
      lastName,
      job,
      adress,
      zipCode,
      numTel,
      mail,
      birthDate,
    } = parent;
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO parent (p_first_name, p_last_name, p_job, p_address, p_zip_code, p_num_tel, p_mail, p_birth_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [firstName, lastName, job, adress, zipCode, numTel, mail, birthDate],
    );
    return result.insertId;
  }
}

export default new ParentRepository();
