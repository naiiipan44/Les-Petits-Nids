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

const add: RequestHandler = async (req, res, next) => {
  try {
    const newBooking = {
      parent_id: req.body.parentId,
      nursery_id: req.body.nurseryId,
      children_id: req.body.childrenId,
      booking_date: req.body.bookingDate,
      booking_range: req.body.bookingRange,
    };

    const insertId = await bookingRepository.create(newBooking);
    if (insertId) {
      res.status(201).json({ insertId });
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, add };
