import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  hashed_password: string;
}

class userLoginRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM user");

    return rows;
  }

  async readEmailWithPassword(email: string) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from user where email = ?",
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

export default new userLoginRepository();
