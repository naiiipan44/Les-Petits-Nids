import type { RequestHandler } from "express";
import bookingRepository from "./bookingRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const bookings = await bookingRepository.readAll();
    res.json(bookings);
  } catch (err) {
    next(err);
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
};

export default { browse };
