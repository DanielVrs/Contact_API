import { Router } from "express";
import {
  createNewUserController,
  deleteUserByIdController,
  readAllUsersController,
  readUserByIdController,
  updateUserByIdController,
} from "../controllers/user.controller";
import { verifyToken } from "../middlewares/verifyToken.middleware";

export const userRoutes: Router = Router();

userRoutes.post("/", createNewUserController);
userRoutes.get("/", verifyToken, readAllUsersController);

userRoutes.get("/:userId/", verifyToken, readUserByIdController);
userRoutes.patch("/", verifyToken, updateUserByIdController);
userRoutes.delete("/", verifyToken, deleteUserByIdController);
