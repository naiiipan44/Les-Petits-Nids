import type { RequestHandler } from "express";

import parentRepository from "./parentRepository";
const browse: RequestHandler = async (req, res) => {
  const userApp = await parentRepository.readAll();

  res.json(userApp);
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const parentId = Number(req.params.id);
    await parentRepository.delete(parentId);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

export default { browse, destroy };
