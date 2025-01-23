import argon2 from "argon2";

import type { RequestHandler } from "express";
import { sign } from "jsonwebtoken";
import userRepository from "../user/userRepository";

const login: RequestHandler = async (req, res, next) => {
  try {
    const user = await userRepository.readEmailWithPassword(req.body.email);
    console.warn(user);
    if (user == null) {
      res.sendStatus(422);
      return;
    }

    const isVerified = await argon2.verify(
      user.hashed_password,
      req.body.password,
    );

    if (isVerified) {
      const payload = {
        id: user.id,
        email: user.email,
      };

      const secretKey = process.env.APP_SECRET;
      if (!secretKey) {
        throw new Error("Invalid login key");
      }

      const token = sign(payload, secretKey, { expiresIn: "1h" });

      res.json({
        token,
        user: user.email,
      });
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
