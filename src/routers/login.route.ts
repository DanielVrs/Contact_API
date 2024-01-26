import { Router } from "express";
import { loginController } from "../controllers/login.controller";

export const loginRoute: Router = Router();

loginRoute.post("/", loginController);
