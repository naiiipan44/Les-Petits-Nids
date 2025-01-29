import databaseClient, {
  type Result,
  type Rows,
} from "../../../database/client";

class ParentRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM parent");

    return rows;
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
}

export default new ParentRepository();
