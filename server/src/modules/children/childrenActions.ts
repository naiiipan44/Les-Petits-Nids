import type { RequestHandler } from "express";

import childrenRepository from "./childrenRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const childrenId = Number(req.params.id);
    const childrens = await childrenRepository.readById(childrenId);
    res.json(childrens);
  } catch (err) {
    next(err);
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
};
const destroy: RequestHandler = async (req, res, next) => {
  try {
    const childrenId = Number(req.params.id);
    await childrenRepository.delete(childrenId);

    res.sendStatus(204);
  } catch (err) {
    next(err);
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
// const edit: RequestHandler = async (req, res, next) => {
//   try {

//     const newChildren = {
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       gender: req.body.gender,
//       birthdate: req.body.birthdate,
//       allergies: req.body.allergies,
//       parentId: req.body.parentId,
//     };
//     const insertId = await childrenRepository.create(newChildren);

//     res.status(201).json({ insertId });
//   } catch (err) {
//     next(err);
//   }
// };

export default { browse, add, destroy };
