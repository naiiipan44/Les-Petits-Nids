import type { RequestHandler } from "express";

import parentRepository from "./parentRepository";
const browse: RequestHandler = async (req, res) => {
  const userApp = await parentRepository.readAll();

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
    const parent = {
      id: req.body.id,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      job: req.body.job,
      adress: req.body.adress,
      zipCode: req.body.zipCode,
      numTel: req.body.numTel,
      mail: req.body.mail,
      birthDate: req.body.birthDate,
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

const edit: RequestHandler = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      job,
      adress,
      zipCode,
      numTel,
      mail,
      birthDate,
    } = req.body;

    const { id } = req.params;

    const editParent = await parentRepository.update({
      firstName,
      lastName,
      job,
      adress,
      zipCode,
      numTel,
      mail,
      birthDate,
      id,
    });
    if (editParent) {
      res.sendStatus(201);
    } else {
      res.status(403).send("An error occured");
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

export default { browse, destroy, add, edit };
