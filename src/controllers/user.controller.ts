import { Request, Response } from "express";
import {
  createNewUserService,
  deleteUserByIdService,
  profileUserLoggedService,
  readAllUsersService,
  readUserByIdService,
  updateUserByIdService,
} from "../services/user.service";

export const createNewUserController = async (req: Request, res: Response) => {
  const data = req.body;

  const user = await createNewUserService(data);

  return res.status(201).json(user);
};

export const readAllUsersController = async (req: Request, res: Response) => {
  const users = await readAllUsersService();

  return res.status(200).json(users);
};

export const readUserByIdController = async (req: Request, res: Response) => {
  const users = await readUserByIdService(req.params.userId);

  return res.status(200).json(users);
};

export const updateUserByIdController = async (req: Request, res: Response) => {
  const userId = res.locals.decoded.sub;
  const users = await updateUserByIdService(userId, req.body);

  return res.status(200).json(users);
};

export const deleteUserByIdController = async (req: Request, res: Response) => {
  const userId = res.locals.decoded.sub;
  await deleteUserByIdService(userId);

  return res.status(204).json();
};

export const profileUserLoggedController = async (req: Request, res: Response) => {
  const userId = res.locals.decoded.sub;
  const user = await profileUserLoggedService(userId);
  return res.status(200).json(user);
};
