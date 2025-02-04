import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";
import type { Children } from "../../types/modules/Children";

class ChildrenRepository {
  async readById(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT c_first_name, c_last_name FROM children WHERE id = ?",
      [id],
    );
    return rows[0];
  }

  async create(children: Omit<Children, "id">) {
    const [result] = await databaseClient.query<Result>(
      "insert into children (c_first_name, c_last_name, c_gender, c_birth_date, c_allergies, parent_id) values (?, ?, ?, ?, ?, ?)",
      [
        children.firstName,
        children.lastName,
        children.gender,
        children.birthdate,
        children.allergies,
        children.parentId,
      ],
    );

    return result.insertId;
  }
}

export default new ChildrenRepository();
