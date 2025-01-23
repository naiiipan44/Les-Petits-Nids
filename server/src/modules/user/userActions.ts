import type { RequestHandler } from "express";

import userRepository from "./userRepository";

const browse: RequestHandler = async (req, res) => {
  const user = await userRepository.read();
  res.json(user);
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const newUser = {
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      email: req.body.email,
      hashed_password: req.body.hashed_password,
    };

    const insertId = await userRepository.create(newUser);
    if (insertId) {
      res.status(201).json({ insertId });
    }
  } catch (err) {
    const error = err as { code: string };
    if (error.code === "ER_DUP_ENTRY") {
      res.status(400).send("Cette adresse mail est déjà utilisée");
    } else {
      next(err);
    }
  }
};

const validation: RequestHandler = async (req, res, next) => {
  try {
    const newUserLogin = {
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      email: req.body.email,
      user_password: req.body.password,
    };

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validPassword = /^(?=.*?[A-Z])(?=.*?\d)(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (newUserLogin.first_name.length < 1 || newUserLogin.last_name < 1) {
      res
        .status(403)
        .json({ message: "Veuillez renseigner votre nom et votre prénom" });
    } else if (!validEmail.test(newUserLogin.email)) {
      res.status(403).json({ message: "L'email saisi n'est pas valide" });
    } else if (!validPassword.test(newUserLogin.user_password)) {
      res
        .status(403)
        .json({ message: "La force du mot de passe est insuffisante" });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

export default { browse, add, validation };
