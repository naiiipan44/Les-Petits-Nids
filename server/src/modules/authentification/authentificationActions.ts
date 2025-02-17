import argon2 from "argon2";
import type { RequestHandler } from "express";
import jwt, { sign } from "jsonwebtoken";
import childrenRepository from "../children/childrenRepository";
import parentRepository from "../parent/parentRepository";
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
        last_name: user.last_name,
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

const logout: RequestHandler = async (req, res, next) => {
  try {
    res.clearCookie("auth_token", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
    res.json({ message: "Logged out" });
  } catch (err) {
    next(err);
  }
};

const updateOrGetUserToken: RequestHandler = async (
  req,
  res,
  next,
): Promise<void> => {
  try {
    const token = req.cookies.auth_token;

    if (!token) {
      res.status(401).json({ error: "Token manquant" });
      return;
    }

    const secretKey = process.env.APP_SECRET;
    if (!secretKey) {
      throw new Error("Clé secrète JWT non définie");
    }

    const decoded = jwt.verify(token, secretKey) as jwt.JwtPayload;

    if (!decoded.id) {
      res.status(401).json({ error: "Token invalide" });
      return;
    }

    const parent = await parentRepository.getParentByUserId(decoded.id);

    let parent_id = null;

    if (parent) {
      parent_id = parent.id;
    }

    let children_id = null;

    if (parent_id) {
      const children = await childrenRepository.getChildrenIdWhithParentId(
        Number(parent?.id),
      );
      children_id = children ? children.id : null;
    }

    const newPayload = {
      ...decoded,
      parent_id,
      children_id,
    };

    const newToken = jwt.sign(newPayload, secretKey);

    res.cookie("auth_token", newToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600000,
      sameSite: "lax",
    });

    res.json({
      user: newPayload,
    });
  } catch (err) {
    next(err);
  }
};

const verifyToken: RequestHandler = (req, res, next) => {
  try {
    const cookie = req.cookies.auth_token;

    // Si le cookie n'est pas identifié, on renvoie malgré tout un status 200, car on ne veut pas bloquer
    // l'accès à la page d'accueil.
    if (!cookie) {
      throw new Error("A cookie must be present.");
    }

    const secretKey = process.env.APP_SECRET;

    if (!secretKey) {
      throw new Error("A secret key must be provided.");
    }

    const decoded = jwt.verify(cookie, secretKey) as jwt.JwtPayload;

    res.locals = decoded;

    // Si besoin de renvoyer le payload décodé côté frontend, vous pouvez utiliser les lignes
    // suivantes les middleware qui suivront le mur d'authentification :

    // const user = res.locals;

    next();
  } catch (err) {
    console.error(err);
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

export default {
  hashPassword,
  login,
  verifyToken,
  updateOrGetUserToken,
  logout,
};
