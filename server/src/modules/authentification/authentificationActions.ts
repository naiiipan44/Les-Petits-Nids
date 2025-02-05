import argon2 from "argon2";
import type { RequestHandler } from "express";
import jwt, { sign } from "jsonwebtoken";
import userRepository from "../user/userRepository";

const login: RequestHandler = async (req, res, next) => {
  try {
    const { email, password, acceptCookies } = req.body;
    const user = await userRepository.readEmailWithPassword(email);

    if (user == null) {
      res.sendStatus(422);
      return;
    }

    const isVerified = await argon2.verify(user.hashed_password, password);

    if (isVerified) {
      const { hashed_password, ...userWithoutHashedPassword } = user;
      const payload = {
        id: user.id,
        email: user.email,
        role: user.role,
        first_name: user.first_name,
      };

      const secretKey = process.env.APP_SECRET;
      if (!secretKey) {
        throw new Error("Invalid login key");
      }

      const token = sign(payload, secretKey, { expiresIn: "4h" });

      if (acceptCookies) {
        res.cookie("auth_token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          maxAge: 3600000,
          sameSite: "lax",
        });
      }

      res.json({
        token,
        user: userWithoutHashedPassword,
      });
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    next(err);
  }
};

const getUser: RequestHandler = (req, res): void => {
  const token = req.cookies.auth_token;
  if (!req.cookies.auth_token) {
    res.status(401).json({ error: "Token manquant" });
    return;
  }

  try {
    const secretKey = process.env.APP_SECRET;
    if (!secretKey) {
      throw new Error("A secret key must be provided");
    }

    const decoded = jwt.verify(token, secretKey);
    res.json({ user: decoded });
  } catch (err) {
    res.status(403).json({ message: "Token invalide" });
  }
};

const verifyToken: RequestHandler = (req, res, next) => {
  try {
    const authorization = req.get("Authorization");

    if (!authorization) {
      throw new Error("Authorization must be provided");
    }

    const [type, token] = authorization.split(" ");

    if (type !== "Bearer") {
      throw new Error("Bearer must be provided");
    }

    const secretKey = process.env.APP_SECRET;

    if (!secretKey) {
      throw new Error("A secret key must be provided");
    }

    jwt.verify(token, secretKey);
    next();
  } catch (err) {
    res.status(400).send({ message: err });
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

export default { hashPassword, login, verifyToken, getUser };
