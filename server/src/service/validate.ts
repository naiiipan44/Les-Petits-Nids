import type { RequestHandler } from "express";
import { body, validationResult } from "express-validator";

export const parentFolderValidator = [
  body("firstName", "cannot have less than two character")
    .isString()
    .isLength({ min: 2 }),
  body("lastName", "cannot have less than two character")
    .isString()
    .isLength({ min: 2 }),
  body("adress", "cannot have at less than two characters")
    .isString()
    .isLength({
      min: 2,
    }),
  body("zipCode", "have to be an integer").isInt().isLength({ min: 2, max: 8 }),
  body("numTel", "should be a string have 10 characters")
    .isString()
    .isLength({ min: 10 }),
  body("mail", "should be a valid email").isEmail(),
  body("birthDate", "should be a valid date").isDate(),
  body("job", "Should be a string").isString(),
];

export const loginValidator = [
  body("email", "Should be a valid email and not empty")
    .isEmail()
    .not()
    .isEmpty(),
  body("password", "Should be a valid password")
    .isLength({ min: 8 })
    .matches(/^(?=.*?[A-Z])(?=.*?\d)(?=.*?[#?!@$%^&*-]).{8,}$/),
];

export const childrenFolderValidator = [
  body("firstName", "cannot have less than two characters").isLength({
    min: 2,
  }),
  body("lastName", "cannot have less than two characters").isLength({ min: 2 }),
  body("gender", "cannot have less than two characters ").isLength({ min: 2 }),
  body("birthdate", "should be a valid date").isDate(),
  body("allergies", "cannot have less than two characters")
    .optional()
    .isLength({
      min: 2,
    }),
  body("user_id", "should be an integer").isInt().not().isEmpty(),
];

export const bookingValidator = [
  body("bookingDate", "Should be a valid date").isDate(),
  body("bookingRange", "cannot have less than two characters").isLength({
    min: 2,
  }),
];

const validate: RequestHandler = (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      next();
    } else {
      res.status(422).json({ errors: errors.array() });
    }
  } catch (err) {
    next(err);
  }
};

export default { validate };
