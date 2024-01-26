import {
  TContact,
  TContactCreate,
  TContactRead,
  TContactReadAllResult,
  TContactUpdate,
} from "../interfaces/contacts.interfaces";
import newPrismaClient from "../prisma";

export const createContactService = async (data: TContactCreate): Promise<TContact> => {
  const contact = await newPrismaClient.contact.create({ data: { ...data } });

  return contact;
};

export const readAllContactService = async (): Promise<TContactReadAllResult> => {
  const contacts = await newPrismaClient.contact.findMany();

  return contacts;
};

export const readContactByIDService = async (
  contactId: string
): Promise<TContact | null> => {
  const contact = await newPrismaClient.contact.findUnique({
    where: { id: contactId },
    select: {
      id: true,
      fullName: true,
      email: true,
      fone: true,
      createdAt: true,
      meansOfContacts: true,
      userId: true,
      _count: true,
    },
  });

  return contact;
};

export const updateContactByIDService = async (
  contactId: string,
  data: TContactUpdate
): Promise<TContact | null> => {
  const contact = await newPrismaClient.contact.update({
    where: { id: contactId },
    data: {
      ...data,
    },
  });

  return contact;
};

export const deleteContactByIDService = async (contactId: string): Promise<void> => {
  await newPrismaClient.contact.delete({ where: { id: contactId } });
};
