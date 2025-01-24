import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";
import type { Children } from "../../types/modules/Children";

class ChildrenRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM children");
    return rows;
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
