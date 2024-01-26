import { TMeanOfContact } from "./meanOfContact.interfaces";

export type TContact = {
  id: string;
  fullName: string;
  email: string;
  fone: string;
  createdAt: Date;
  userId: string;
};

export type TContactRead = TContact & {
  meansOfContact: TMeanOfContact[] | null;
};

export type TContactCreate = Omit<TContact, "id" | "createdAt">;

export type TContactReadAllResult = Array<TContact>;

export type TContactUpdate = Partial<TContact>;
