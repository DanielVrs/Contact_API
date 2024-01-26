import { Router } from "express";
import { userRoutes } from "./user.route";
import { loginRoute } from "./login.route";
import { contactRoutes } from "./contacts.route";
import { meanOfContactRoutes } from "./meanOfContact.route";

export const routes: Router = Router();

routes.use("/user/", userRoutes);
routes.use("/login/", loginRoute);
routes.use("/contact/", contactRoutes);
routes.use("/meanOfContact/", meanOfContactRoutes);
