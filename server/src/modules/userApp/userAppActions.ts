import type { RequestHandler } from "express";

import userAppRepository from "./userAppRepository";
const browse: RequestHandler = async (req, res) => {
  const user = await userAppRepository.readAll();

  res.json(user);
};

export default { browse };
