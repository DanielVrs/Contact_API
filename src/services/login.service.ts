import { compare } from "bcryptjs";
import { TUser, TUserLogin, TUserLoginReturn } from "../interfaces/user.interfaces";
import newPrismaClient from "../prisma";
import AppError from "../Errors/AppErrors.erros";
import { sign } from "jsonwebtoken";

export const loginService = async (data: TUserLogin): Promise<TUserLoginReturn> => {
  const { email } = data;

  const user: TUser | null = await newPrismaClient.user.findUnique({
    where: { email: email },
  });

  if (!user) throw new AppError("Invalid credentials", 401);

  const comparePass = await compare(data.password, user.password);

  if (!comparePass) throw new AppError("Invalid credentials", 401);

  const token: string = sign({ email: user.email }, process.env.SECRET_KEY!, {
    subject: user.id.toString(),
    expiresIn: process.env.EXPIRES_IN!,
  });

  return { token };
};
