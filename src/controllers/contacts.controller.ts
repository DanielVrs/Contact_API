import { Request, Response } from "express";
import {
  createContactService,
  deleteContactByIDService,
  readAllContactService,
  readContactByIDService,
  updateContactByIDService,
} from "../services/contact.service";
import { TContact } from "../interfaces/contacts.interfaces";

export const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = req.body;
  const userId = res.locals.decoded.sub;
  const contact: TContact = await createContactService({ ...data, userId });

  return res.status(201).json(contact);
};

export const readAllContactController = async (req: Request, res: Response) => {
  const contacts = await readAllContactService();

  return res.status(200).json(contacts);
};

export const readContactByIDController = async (req: Request, res: Response) => {
  const contact = await readContactByIDService(req.params.contactId);

  return res.status(200).json(contact);
};

export const updateContactByIDController = async (req: Request, res: Response) => {
  const contactId = req.params.contactId;
  const contact = await updateContactByIDService(contactId, req.body);

  return res.status(200).json(contact);
};

export const deleteContactByIDController = async (req: Request, res: Response) => {
  const contactId = req.params.contactId;
  await deleteContactByIDService(contactId);

  return res.status(204).json();
};
