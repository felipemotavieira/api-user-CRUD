import { Router } from "express";
import createUsersController from "../controllers/createUser.controller";
import listUsersController from "../controllers/listUser.controller"
import decodeIsAdmMiddleware from "../middlewares/decodeIsAdmMiddleware.middleware";
import isEmailRegisteredMiddleware from "../middlewares/IsEmailRegistered.middleware"
import isAdmMiddleware from "../middlewares/isAdmMiddleware.middleware"
import showUserMiddleware from "../middlewares/showUserMiddleware.middleware";
import showUserController from "../controllers/showUserController.controller";
import editUserController from "../controllers/editUserController.controller";
import deleteUserController from "../controllers/deleteUserController.controller";

const router = Router()

router.get("", decodeIsAdmMiddleware, isAdmMiddleware, listUsersController)
router.post("", isEmailRegisteredMiddleware, createUsersController)
router.get("/profile", showUserMiddleware, showUserController)
router.patch("/:id", decodeIsAdmMiddleware, isAdmMiddleware, editUserController)
router.delete("/:id", decodeIsAdmMiddleware, isAdmMiddleware, deleteUserController)

export default router