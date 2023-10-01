import { Router } from "express";
import { login, register } from "../controllers/AuthController.js";
import {
  validationLogin,
  validationRegister,
} from "../validations/validationAuth.js";
import { requireToken } from "../middleware/requireToken.js";
import { validationResultExpress } from "../middleware/validationAuthResult.js";
const AuthRouter = Router();

AuthRouter.post(
  "/register",
  validationRegister,
  validationResultExpress,
  register
);
AuthRouter.post("/login", validationLogin, validationResultExpress, login);

export default AuthRouter;
