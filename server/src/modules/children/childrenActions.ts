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

export default { browse };
