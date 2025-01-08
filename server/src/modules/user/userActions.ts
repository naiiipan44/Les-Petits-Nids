import type { RequestHandler } from "express";

import userRepository from "./userRepository";
const browse: RequestHandler = async (req, res) => {
  const user = await userRepository.readAll();

  res.json(user);
};

export default { browse };
