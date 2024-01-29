import { NextFunction, Request, Response } from "express";
import newPrismaClient from "../prisma";
import AppError from "../Errors/AppErrors.erros";

export const verifyEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email } = req.body;

  const user = await newPrismaClient.user.findUnique({ where: { email: email } });

  if (user) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};
