import AppError from "../Errors/AppErrors.erros";
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
  const contacts = await newPrismaClient.contact.findMany({
    select: {
      id: true,
      fullName: true,
      email: true,
      fone: true,
      createdAt: true,
      userId: true,
      _count: true,
    },
  });

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

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  return contact;
};

export const deleteContactByIDService = async (contactId: string): Promise<void> => {
  await newPrismaClient.contact.delete({ where: { id: contactId } });
};

export const updateContactByIDService = async (
  contactId: string,
  data: Record<string, any>
): Promise<TContact | null> => {
  const existingContact = await newPrismaClient.contact.findUnique({
    where: { id: contactId },
  });

  if (!existingContact) {
    throw new AppError("Contact not found", 404);
  }

  const contactUpdate: Record<string, any> = {};

  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const dataValue = data[key];
      const existingValue = existingContact[key as keyof typeof existingContact];

      if (dataValue !== "" && dataValue !== null && dataValue !== undefined) {
        if (key === "createdAt" && typeof dataValue === "string") {
          contactUpdate[key] = new Date(dataValue);
        } else {
          contactUpdate[key] = dataValue;
        }
      } else if (existingValue !== null && existingValue !== undefined) {
        contactUpdate[key] = existingValue;
      }
    }
  }

  const contactUpdated = await newPrismaClient.contact.update({
    where: { id: contactId },
    data: contactUpdate,
  });

  return contactUpdated;
};
