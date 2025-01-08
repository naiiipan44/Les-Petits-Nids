import type { RequestHandler } from "express";

import parentRepository from "./parentRepository";
const browse: RequestHandler = async (req, res) => {
  const parent = await parentRepository.readAll();

  res.json(parent);
};

export default { browse };
