import type { RequestHandler } from "express";

import nurseryRepository from "./nurseryRepository";
const browse: RequestHandler = async (req, res) => {
  const nursery = await nurseryRepository.readAll();

  res.json(nursery);
};

export default { browse };
