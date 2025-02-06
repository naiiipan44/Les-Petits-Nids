import type { RequestHandler } from "express";

import nurseryRepository from "./nurseryRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const nurseries = await nurseryRepository.readAll();
    res.json(nurseries);
  } catch (err) {
    next(err);
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
};

const readNurseryById: RequestHandler = async (req, res, next) => {
  try {
    const nurseryId = Number(req.params.id);
    const nurseries = await nurseryRepository.readById(nurseryId);
    res.json(nurseries);
  } catch (err) {
    next(err);
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
};

const read: RequestHandler = async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      res
        .status(400)
        .json({ error: "ID invalide. Un entier positif est attendu." });
      return;
    }

    const nursery = await nurseryRepository.readById(id);

    if (!nursery) {
      res.status(404).json({ error: "Crèche non trouvée" });
      return;
    }

    res.json(nursery);
  } catch (error) {
    console.error("Erreur lors de la récupération de la crèche :", error);
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const newNursery = {
      name: req.body.name,
      address: req.body.address,
      zipCode: req.body.zipCode,
      phoneNumber: req.body.phoneNumber,
      capacity: req.body.capacity,
      availability: req.body.availability,
      gestion: req.body.gestion,
      minAge: req.body.minAge,
      maxAge: req.body.maxAge,
      isDisabled: req.body.isDisabled,
    };
    const insertId = await nurseryRepository.create(newNursery);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

export default { browse, readNurseryById, add, read };
