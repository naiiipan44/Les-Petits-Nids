import type { RequestHandler } from "express";

import childrenRepository from "./childrenRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const childrens = await childrenRepository.readAll();
    res.json(childrens);
  } catch (err) {
    next(err);
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const newChildren = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      gender: req.body.gender,
      birthdate: req.body.birthdate,
      allergies: req.body.allergies,
      parentId: req.body.parentId,
    };
    const insertId = await childrenRepository.create(newChildren);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

export default { browse, add };
