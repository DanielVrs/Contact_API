export type TMeanOfContact = {
  id: string;
  email: string;
  fone: string;
  contactId: string | null;
  userId: string | null;
};

export type TMeanOfContactCreate = Omit<TMeanOfContact, "id">;
export type TMeanOfContactUpdate = Partial<TMeanOfContactCreate>;
export type TMeanOfContactReadAll = Array<TMeanOfContactCreate>;
