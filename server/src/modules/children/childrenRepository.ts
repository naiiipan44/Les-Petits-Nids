import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";
import type { Children } from "../../types/modules/Children";

class ChildrenRepository {
  async readById(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT c_first_name, c_last_name FROM children WHERE id = ?",
      [id],
    );
    return rows[0] as Children;
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "delete from children where id = ?",
      [id],
    );

    return result.affectedRows;
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

  async getChildrenIdWhithParentId(parentId: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT id FROM children WHERE parent_id = ?",
      [parentId],
    );

    return rows[0] as Children;
  }

  async update(children: Children) {
    const [row] = await databaseClient.query<Result>(
      "UPDATE children SET c_first_name = ?, c_last_name = ?, c_gender = ?, c_birth_date = ?, c_allergies = ?, parent_id = ? WHERE id = ?",
      [
        children.firstName,
        children.lastName,
        children.gender,
        children.birthdate,
        children.allergies,
        children.parentId,
        children.id,
      ],
    );
    return row.affectedRows;
  }
}

export default new ChildrenRepository();
