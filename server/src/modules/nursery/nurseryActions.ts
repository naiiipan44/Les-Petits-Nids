import type { RequestHandler } from "express";

import nurseryRepository from "./nurseryRepository";

const browse: RequestHandler = async (req, res) => {
  try {
    const nureseryId = Number(req.query.nureseryId);

    if (nureseryId) {
      const nursery = await nurseryRepository.readById(nureseryId);
      if (nursery) {
        res.status(200).json(nursery);
      } else {
        res.sendStatus(403).json({ error: "Erreur interne du serveur" });
      }
    } else {
      const nurseries = await nurseryRepository.readAll();
      if (nurseries.length) {
        res.status(200).json(nurseries);
      } else {
        res.sendStatus(403).json({ error: "Erreur interne du serveur" });
      }
    }
  } catch (err) {
    console.error(err);
  }
};

const read: RequestHandler = async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
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
      type: req.body.type,
      mail: req.body.mail,
      address: req.body.address,
      zipCode: req.body.zipCode,
      phoneNumber: req.body.phoneNumber,
      capacity: req.body.capacity,
      availability: req.body.availability,
      gestion: req.body.gestion,
      minAge: req.body.minAge,
      maxAge: req.body.maxAge,
      isDisabled: req.body.isDisabled,
      coordLong: req.body.coordLong,
      coordLat: req.body.coordLat,
      description: req.body.description,
      image: req.body.image,
      price: req.body.price,
    };
    const insertId = await nurseryRepository.create(newNursery);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      res
        .status(400)
        .json({ error: "ID invalide. Un entier positif est attendu." });
      return;
    }

    const updatedNursery = {
      name: req.body.ns_name,
      type: req.body.ns_type,
      mail: req.body.ns_mail,
      address: req.body.ns_address,
      zipCode: req.body.ns_zip_postal,
      phoneNumber: req.body.ns_num_tel,
      capacity: req.body.ns_capacity,
      availability: req.body.ns_nb_place_dispo,
      gestion: req.body.ns_is_public,
      minAge: req.body.ns_age_min,
      maxAge: req.body.ns_age_min,
      isDisabled: req.body.ns_is_disabled,
      coordLong: req.body.ns_coord_long,
      coordLat: req.body.ns_coord_lat,
      description: req.body.ns_description,
      image: req.body.ns_image,
      price: req.body.ns_price,
    };
    const affectedRows = await nurseryRepository.update(id, updatedNursery);

    if (affectedRows) {
      res.status(200).json({ message: "Crèche mise à jour avec succès." });
    } else {
      res.status(404).json({ error: "Crèche non trouvée." });
    }
  } catch (err) {
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
      res
        .status(400)
        .json({ error: "ID invalide. Un entier positif est attendu." });
      return;
    }

    const affectedRows = await nurseryRepository.delete(id);

    if (affectedRows) {
      res.status(200).json({ message: "Crèche supprimée avec succès." });
    } else {
      res.status(404).json({ error: "Crèche non trouvée." });
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, add, read, edit, destroy };
