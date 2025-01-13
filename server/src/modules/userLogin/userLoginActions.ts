import type { RequestHandler } from "express";

import userLoginRepository from "./userLoginRepository";

const browse: RequestHandler = async (req, res) => {
  const userLogin = await userLoginRepository.readAll();

  res.json(userLogin);
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const newUserLogin = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      user_password: req.body.user_password,
    };

    const insertId = await userLoginRepository.create(newUserLogin);
    if (insertId) {
      res.status(201).json({ insertId });
    }
  } catch (error) {
    next(error);
  }
};

export default { browse, add };
