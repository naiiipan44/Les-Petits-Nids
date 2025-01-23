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

// const add: RequestHandler = async (req, res, next) => {
//   try {
//     const newItem = {
//       title: req.body.title,
//       user_id: req.body.user_id,
//     };
//     const insertId = await childrenRepository.create(newItem);

//     res.status(201).json({ insertId });
//   } catch (err) {
//     next(err);
//   }
// };

export default { browse };
