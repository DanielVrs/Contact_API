import { hash } from "bcryptjs";
import newPrismaClient from "../prisma";
import {
  TUserCreate,
  TUserReadAllResult,
  TUserResult,
  TUserUpdate,
} from "../interfaces/user.interfaces";
import AppError from "../Errors/AppErrors.erros";

export const createNewUserService = async (data: TUserCreate): Promise<TUserResult> => {
  data.password = await hash(data.password, 10);

  const user: TUserResult = await newPrismaClient.user.create({
    data: { ...data },
    select: { id: true, fullName: true, email: true, fone: true, createdAt: true },
  });

  return user;
};

export const readAllUsersService = async (): Promise<TUserReadAllResult> => {
  const users = await newPrismaClient.user.findMany({
    select: {
      id: true,
      fullName: true,
      email: true,
      fone: true,
      createdAt: true,
      _count: true,
    },
  });

  return users;
};

export const readUserByIdService = async (
  userId: string
): Promise<TUserResult | null> => {
  const user = await newPrismaClient.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      fullName: true,
      email: true,
      fone: true,
      createdAt: true,
      contacts: true,
      _count: true,
      meansOfContacts: true,
    },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return user;
};

export const updateUserByIdService = async (
  userId: string,
  data: TUserUpdate
): Promise<TUserResult> => {
  const user = await newPrismaClient.user.update({
    where: { id: userId },
    data: {
      ...data,
    },
    select: { id: true, fullName: true, email: true, fone: true, createdAt: true },
  });

  return user;
};

export const deleteUserByIdService = async (userId: string): Promise<void> => {
  await newPrismaClient.user.delete({ where: { id: userId } });
};
