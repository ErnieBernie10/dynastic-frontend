export interface Person {
  firstname: string;
  middlename?: string;
  lastname: string;
  motherId?: string;
  fatherId?: string;
  id: string;
  createdAt?: Date;
  modifiedAt?: Date;
  relationships: Record<string, Relationship>;
}

export interface Relationship {
  partner: Person;
  children: Person[];
}
