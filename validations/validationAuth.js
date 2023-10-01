import {body} from "express-validator";

export const validationRegister = [
  body("email", "Verifique el email").trim().isEmail().normalizeEmail(),
  body("password", "verifique su contraseña")
    .trim()
    .isLength({ min: 7 })
    .custom((value, { req }) => {
      if (value !== req.body.repassword) {
        throw new Error("Las contraseñas no coinciden");
      }
      return true;
    }),
];

export const validationLogin = [
  body("email", "Verifique el email").trim().isEmail().normalizeEmail(),
  body("password", "verifique su contraseña")
    .trim()
    .isLength({ min: 7 })
];
