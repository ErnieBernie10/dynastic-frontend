import { Guid } from "../../interface/Common";

export type Members = Record<Guid, Person>;

export interface Tree {
  members: Members;
}

export interface Person {
  id: Guid;
  firstname: string;
  lastname: string;
  middlename: string;
  motherId: Guid;
  fatherId: Guid;
  birthDate?: string;
  createdAt: string;
  modifiedAt: string;
  relationships?: Relationship[];
}

export interface Relationship {
  partner: Guid;
  children: Guid[];
}
