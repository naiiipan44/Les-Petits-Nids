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
    const nurseryId = Number(req.params.id);
    const { parent_id, children_id, bookingDate, bookingRange, status } =
      req.body;

    const insertId = await bookingRepository.create({
      nurseryId,
      parent_id,
      children_id,
      bookingDate,
      bookingRange,
      status,
    });
    if (insertId) {
      res.status(201).json({ insertId });
    }
  } catch (err) {
    const error = err as { code: string };
    if (error.code === "ER_DUP_ENTRY") {
      res.status(400).send("Vous avez déjà fait une réservation à cette date");
    } else {
      res.sendStatus(400);
      next(err);
    }
  }
};

const readByParentId: RequestHandler = async (req, res, next) => {
  try {
    const parentId = Number(req.query.parentId);
    const bookings = await bookingRepository.readByParentId(parentId);
    res.json(bookings);
  } catch (err) {
    next(err);
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
};

const readByNurseryId: RequestHandler = async (req, res, next) => {
  try {
    const nurseryId = Number(req.query.nurseryId);

    const bookings = await bookingRepository.readByNurseryId(nurseryId);

    res.json(bookings);
  } catch (err) {
    const error = err as { code: string };
    if (error.code === "ER_DUP_ENTRY") {
      res.status(400).send("Vous avez déjà fait une réservation à cette date");
    } else {
      res.sendStatus(400);
      next(err);
    }
  }
};

const patch: RequestHandler = async (req, res, next) => {
  try {
    const { status } = req.body;
    const childrenId = Number(req.query.childrenId);

    const updatedBooking = await bookingRepository.updatedBooking(
      status,
      childrenId,
    );

    if (updatedBooking) {
      res.sendStatus(201);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(400);
    next(err);
  }
};

export default { browse, add, read, readByNurseryId, readByParentId, patch };
