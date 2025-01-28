import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";
import type { User } from "../../types/modules/User";

class UserRepository {
  async read() {
    const [rows] = await databaseClient.query<Rows>(
      "select first_name, last_name, email from user",
    );

    return rows as User[];
  }

  async readEmailWithPassword(email: string) {
    const [rows] = await databaseClient.query<Rows>(
      "select first_name, last_name, email from user where email = ?",
      [email],
    );

    return rows[0] as User;
  }

  async create(user: Omit<User, "id">) {
    const [result] = await databaseClient.query<Result>(
      "insert into user (first_name, last_name, email, hashed_password) values (?, ?, ?, ?)",
      [user.first_name, user.last_name, user.email, user.hashed_password],
    );

    return result.insertId;
  }
}

export default new UserRepository();
