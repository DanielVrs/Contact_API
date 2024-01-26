import { Router } from "express";
import {
  createNewMeanOfContactToContactController,
  createNewMeanOfContactToUserController,
  deleteMeanOfContactByIdController,
  readAllMeanOfContactController,
  readMeanOfContactByIdController,
  updateMeanOfContactByIdController,
} from "../controllers/meanOfContact.controller";
import { verifyToken } from "../middlewares/verifyToken.middleware";

export const meanOfContactRoutes: Router = Router();

meanOfContactRoutes.post("/", verifyToken, createNewMeanOfContactToUserController);
meanOfContactRoutes.post(
  "/:contactId/",
  verifyToken,
  createNewMeanOfContactToContactController
);

meanOfContactRoutes.get("/", verifyToken, readAllMeanOfContactController);
meanOfContactRoutes.get(
  "/:meanOfContactId/",
  verifyToken,
  readMeanOfContactByIdController
);
meanOfContactRoutes.patch(
  "/:meanOfContactId/",
  verifyToken,
  updateMeanOfContactByIdController
);
meanOfContactRoutes.delete(
  "/:meanOfContactId/",
  verifyToken,
  deleteMeanOfContactByIdController
);
