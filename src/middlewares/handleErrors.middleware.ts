import { NextFunction, Request, Response } from "express";

import AppError from "../Errors/AppErrors.erros";
import { JsonWebTokenError } from "jsonwebtoken";
// import { ZodError } from "zod";

export const handleErrors = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  if (error instanceof AppError) {
    return res.status(error.status).json({ message: error.message });
  }

  //   if (error instanceof ZodError) {
  //     return res.status(400).json({ message: error.flatten().fieldErrors });
  //   }

  if (error instanceof JsonWebTokenError) {
    return res.status(401).json({ message: error.message });
  }

  console.log(error);
  return res.status(500).json("Internal Server Error");
};
