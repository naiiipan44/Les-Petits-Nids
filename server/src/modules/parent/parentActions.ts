import type { RequestHandler } from "express";

import parentRepository from "./parentRepository";
const browse: RequestHandler = async (req, res) => {
  const userApp = await parentRepository.readAll();

  res.json(userApp);
};
const read: RequestHandler = async (req, res) => {
  const parentId = Number(req.params.id);
  const userApp = await parentRepository.readById(parentId);

  res.json(userApp);
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const parentId = Number(req.params.id);
    await parentRepository.delete(parentId);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};
const add: RequestHandler = async (req, res, next) => {
  try {
    const { firstName, lastName, mail } = req.body;
    const user = req.user;

    if (!user) {
      res.status(401).send("Utilisateur non authentifié.");
      return;
    }

    if (
      user.first_name.trim().toLowerCase() !== firstName.trim().toLowerCase() ||
      user.last_name.trim().toLowerCase() !== lastName.trim().toLowerCase() ||
      user.email.trim().toLowerCase() !== mail.trim().toLowerCase()
    ) {
      res
        .status(400)
        .send(
          "Les informations saisies ne correspondent pas à celles de l'utilisateur.",
        );
      return;
    }

    const existingParent = await parentRepository.getParentByUserId(user.id);
    if (existingParent) {
      res
        .status(400)
        .send("Un dossier parent existe déjà pour cet utilisateur.");
      return;
    }

    const parent = {
      id: req.body.id,
      firstName,
      lastName,
      job: req.body.job,
      adress: req.body.adress,
      zipCode: req.body.zipCode,
      numTel: req.body.numTel,
      mail,
      birthDate: req.body.birthDate,
      userId: Number(user.id),
    };

    const insertId = await parentRepository.create(parent);

    if (insertId) {
      res.status(201).json({ insertId });
    } else {
      res.status(400).send("les champs insérés ne sont pas valides");
    }
  } catch (err) {
    const error = err as { code: string };
    if (error.code === "ER_DUP_ENTRY") {
      res.status(406).send("Cette adresse mail existe déjà");
    } else {
      res.status(404);
      next(err);
    }
  }
};

export default { browse, destroy, add, read };
