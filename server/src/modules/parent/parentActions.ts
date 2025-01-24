import type { RequestHandler } from "express";

import parentRepository from "./parentRepository";
const browse: RequestHandler = async (req, res) => {
  const userApp = await parentRepository.readAll();

  res.json(userApp);
};

export default { browse };
