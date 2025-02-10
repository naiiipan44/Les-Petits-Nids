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

const read: RequestHandler = async (req, res, next) => {
  try {
    const bookings = await bookingRepository.readBookParentAndChildren();
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
      status: req.body.status,
    };

    const insertId = await bookingRepository.create(newBooking);
    if (insertId) {
      res.status(201).json({ insertId });
    }
  } catch (err) {
    next(err);
  }
};

const readByParentId: RequestHandler = async (req, res, next) => {
  try {
    const parentId = req.body.parentId;
    const bookings = await bookingRepository.readByParentId(parentId);
    res.json(bookings);
  } catch (err) {
    next(err);
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
};

const readByNurseryId: RequestHandler = async (req, res, next) => {
  try {
    const nurseryId = req.body.nurseryId;
    const bookings = await bookingRepository.readByNurseryId(nurseryId);
    res.json(bookings);
  } catch (err) {
    next(err);
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
};

export default { browse, add, read, readByParentId, readByNurseryId };
