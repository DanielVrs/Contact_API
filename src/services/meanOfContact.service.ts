import AppError from "../Errors/AppErrors.erros";
import {
  TMeanOfContact,
  TMeanOfContactCreate,
  TMeanOfContactReadAll,
  TMeanOfContactUpdate,
} from "../interfaces/meanOfContact.interfaces";
import newPrismaClient from "../prisma";

export const createNewMeanOfContactToUserService = async (
  data: TMeanOfContactCreate
): Promise<TMeanOfContact> => {
  const meanOfContact: TMeanOfContact = await newPrismaClient.meanOfContact.create({
    data: { ...data },
  });

  return meanOfContact;
};

export const createNewMeanOfContactToContactService = async (
  data: TMeanOfContactCreate
): Promise<TMeanOfContact> => {
  const meanOfContact: TMeanOfContact = await newPrismaClient.meanOfContact.create({
    data: { ...data },
  });

  return meanOfContact;
};

export const readAllMeanOfContactService = async (): Promise<TMeanOfContactReadAll> => {
  const meanOfContacts = await newPrismaClient.meanOfContact.findMany();

  return meanOfContacts;
};

export const readMeanOfContactByIdService = async (
  meanOfContactId: string
): Promise<TMeanOfContact | null> => {
  const meanOfContact = await newPrismaClient.meanOfContact.findUnique({
    where: { id: meanOfContactId },
  });

  if (!meanOfContact) {
    throw new AppError("mean of contact not found.", 404);
  }

  return meanOfContact;
};

export const updateMeanOfContactByIdService = async (
  meanOfContactId: string,
  data: TMeanOfContactUpdate
): Promise<TMeanOfContact> => {
  const meanOfContact = await newPrismaClient.meanOfContact.findUnique({
    where: { id: meanOfContactId },
  });

  if (!meanOfContact) {
    throw new AppError("mean of contact not found.", 404);
  }

  const meanOfContactUpdated = await newPrismaClient.meanOfContact.update({
    where: { id: meanOfContactId },
    data: {
      ...data,
    },
  });

  return meanOfContactUpdated;
};

export const deleteMeanOfContactByIdService = async (
  meanOfContactId: string
): Promise<void> => {
  const meanOfContact = await newPrismaClient.meanOfContact.findUnique({
    where: { id: meanOfContactId },
  });

  if (!meanOfContact) {
    throw new AppError("mean of contact not found.", 404);
  }
  await newPrismaClient.meanOfContact.delete({ where: { id: meanOfContactId } });
};
