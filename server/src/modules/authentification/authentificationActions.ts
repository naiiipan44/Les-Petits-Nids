import argon2 from "argon2";

import type { RequestHandler } from "express";

import userRepository from "../user/userRepository";

const login: RequestHandler = async (req, res, next) => {
  try {
    const user = await userRepository.readEmailWithPassword(req.body.email);
    if (user == null) {
      res.sendStatus(422);
      return;
    }

    const verified = await argon2.verify(
      user.hashed_password,
      req.body.user_password,
    );

    if (verified) {
      const { hashed_password, ...userWithoutHashedPassword } = user;

      res.json(userWithoutHashedPassword);
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    next(err);
  }
};

const hashPassword: RequestHandler = async (req, res, next) => {
  try {
    const user_password = req.body.password;

    const hashedPassword = await argon2.hash(user_password);

    req.body.hashed_password = hashedPassword;

    req.body.password = undefined;
    next();
  } catch (err) {
    next(err);
  }
};

export default { hashPassword, login };
