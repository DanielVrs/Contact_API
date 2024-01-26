import { Request, Response } from "express";
import { TUserLoginReturn } from "../interfaces/user.interfaces";
import { loginService } from "../services/login.service";

export const loginController = async (req: Request, res: Response): Promise<Response> => {
  const token: TUserLoginReturn = await loginService(req.body);
  return res.status(200).json(token);
};
