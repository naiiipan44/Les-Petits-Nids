import type { RequestHandler } from "express";

import userAppRepository from "./userAppRepository";
const browse: RequestHandler = async (req, res) => {
  const userApp = await userAppRepository.readAll();

  res.json(userApp);
};

export default { browse };
