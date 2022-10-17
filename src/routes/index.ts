import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";
import listUserController from "../controllers/users/listUser.controller";
import loginSessionController from "../controllers/sessions/loginSession.controller";
import updateUserController from "../controllers/users/updateUser.controller";
import ensureAdmMiddleware from "../middlewares/ensureAdm.middleware";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIsActiveMiddleware from "../middlewares/ensureIsActive.middleware";
import ensureUpdateMiddleware from "../middlewares/updateVerificationReq";

export const UserRoutes = Router();
export const UserSession = Router();

UserRoutes.post("", createUserController);
UserRoutes.get(
  "",
  ensureAuthMiddleware,
  ensureAdmMiddleware,
  listUserController
);
UserRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureUpdateMiddleware,
  updateUserController
);
UserRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureAdmMiddleware,
  deleteUserController
);

UserSession.post("", loginSessionController);
