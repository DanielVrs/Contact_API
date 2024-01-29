import { Router } from "express";
import {
  createContactController,
  deleteContactByIDController,
  readAllContactController,
  readContactByIDController,
  updateContactByIDController,
} from "../controllers/contacts.controller";
import { verifyToken } from "../middlewares/verifyToken.middleware";

export const contactRoutes: Router = Router();

contactRoutes.post("/", verifyToken, createContactController);
contactRoutes.get("/", verifyToken, readAllContactController);
contactRoutes.get("/:contactId", verifyToken, readContactByIDController);
contactRoutes.patch("/:contactId", verifyToken, updateContactByIDController);
contactRoutes.delete("/:contactId", verifyToken, deleteContactByIDController);
