import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

interface UserLogin {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  user_password: string;
}

class UserLoginRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM userLogin");

    return rows;
  }

  async create(userLogin: Omit<UserLogin, "id">) {
    const [result] = await databaseClient.query<Result>(
      "insert into userLogin (first_name, last_name, email, user_password) values (?, ?, ?, ?)",
      [
        userLogin.first_name,
        userLogin.last_name,
        userLogin.email,
        userLogin.user_password,
      ],
    );

    return result.insertId;
  }
}

export default new UserLoginRepository();
