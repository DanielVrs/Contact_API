import { Router } from "express";
import {
  createNewUserController,
  deleteUserByIdController,
  readAllUsersController,
  readUserByIdController,
  updateUserByIdController,
} from "../controllers/user.controller";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import generatePdfReport from "../generatePdfReport/generatePdfReport";
import { verifyEmail } from "../middlewares/verifyEmail.middleware";
import { verifyUniqueName } from "../middlewares/verifyFullName.middleware";

export const userRoutes: Router = Router();

userRoutes.post("/", verifyEmail, verifyUniqueName, createNewUserController);
userRoutes.get("/", verifyToken, readAllUsersController);

userRoutes.get("/:userId", verifyToken, readUserByIdController);
userRoutes.patch("/", verifyToken, updateUserByIdController);
userRoutes.delete("/", verifyToken, deleteUserByIdController);

userRoutes.post("/report", verifyToken, generatePdfReport);
