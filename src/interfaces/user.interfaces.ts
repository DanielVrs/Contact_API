import { TContact } from "./contacts.interfaces";

export type TUser = {
  id: string;
  fullName: string;
  email: string;
  fone: string;
  password: string;
  createdAt: Date;
};

export type TUserCreate = Omit<TUser, "id" | "createdAt">;

export type TUserResult = Omit<TUser, "password">;

export type TUserReadAllResult = Array<TUserResult>;

export type TUserUpdate = Partial<TUser>;

export type TUserLogin = Pick<TUser, "email" | "password">;

export type TUserLoginReturn = { token: string };
