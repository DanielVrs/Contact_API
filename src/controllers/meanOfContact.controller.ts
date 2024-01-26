import { Request, Response } from "express";
import {
  createNewMeanOfContactToContactService,
  createNewMeanOfContactToUserService,
  deleteMeanOfContactByIdService,
  readAllMeanOfContactService,
  readMeanOfContactByIdService,
  updateMeanOfContactByIdService,
} from "../services/meanOfContact.service";

export const createNewMeanOfContactToUserController = async (
  req: Request,
  res: Response
) => {
  const userId = res.locals.decoded.sub;
  const data = req.body;

  const meanOfContact = await createNewMeanOfContactToUserService({ ...data, userId });

  return res.status(201).json(meanOfContact);
};

export const createNewMeanOfContactToContactController = async (
  req: Request,
  res: Response
) => {
  const contactId = req.params.contactId;
  const data = req.body;

  const meanOfContact = await createNewMeanOfContactToContactService({
    ...data,
    contactId,
  });

  return res.status(201).json(meanOfContact);
};

export const readAllMeanOfContactController = async (req: Request, res: Response) => {
  const meanOfContacts = await readAllMeanOfContactService();

  return res.status(200).json(meanOfContacts);
};

export const readMeanOfContactByIdController = async (req: Request, res: Response) => {
  const meanOfContact = await readMeanOfContactByIdService(req.params.meanOfContactId);

  return res.status(200).json(meanOfContact);
};

export const updateMeanOfContactByIdController = async (req: Request, res: Response) => {
  const meanOfContactId = req.params.meanOfContactId;
  const data = req.body;

  console.log(data);
  console.log(meanOfContactId);
  const meanOfContact = await updateMeanOfContactByIdService(meanOfContactId, data);

  return res.status(200).json(meanOfContact);
};

export const deleteMeanOfContactByIdController = async (req: Request, res: Response) => {
  const meanOfContactId = res.locals.decoded.sub;
  await deleteMeanOfContactByIdService(meanOfContactId);

  return res.status(204).json();
};
