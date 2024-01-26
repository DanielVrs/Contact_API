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
  const user: TMeanOfContact = await newPrismaClient.meanOfContact.create({
    data: { ...data },
  });

  return user;
};

export const createNewMeanOfContactToContactService = async (
  data: TMeanOfContactCreate
): Promise<TMeanOfContact> => {
  const user: TMeanOfContact = await newPrismaClient.meanOfContact.create({
    data: { ...data },
  });

  return user;
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

  return meanOfContact;
};

export const updateMeanOfContactByIdService = async (
  meanOfContactId: string,
  data: TMeanOfContactUpdate
): Promise<TMeanOfContact> => {
  const meanOfContact = await newPrismaClient.meanOfContact.update({
    where: { id: meanOfContactId },
    data: {
      ...data,
    },
  });

  return meanOfContact;
};

export const deleteMeanOfContactByIdService = async (userId: string): Promise<void> => {
  await newPrismaClient.user.delete({ where: { id: userId } });
};
