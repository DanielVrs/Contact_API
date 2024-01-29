import { NextFunction, Request, Response } from "express";
import newPrismaClient from "../prisma";
import AppError from "../Errors/AppErrors.erros";

export const verifyUniqueName = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { fullName } = req.body;

  const user = await newPrismaClient.user.findUnique({ where: { fullName: fullName } });

  if (user) {
    throw new AppError("Full name already exists", 409);
  }

  return next();
};
