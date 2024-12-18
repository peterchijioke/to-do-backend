import { Router } from "express";
import { AuthValidator } from "../validators";
import { AuthController } from "../controllers";
import { checkAuth } from "../utils";

export const authRouter:Router = Router();

authRouter.post(
  "/register",
  AuthValidator.registerValidator(),
  AuthController.registerController
);
authRouter.post(
  "/login",
  AuthValidator.loginValidator(),
  AuthController.loginController
);
authRouter.get(
  "/",
  checkAuth,
  AuthController.getUserDetailsController
);
