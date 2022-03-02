import { Guid } from "../../interface/Common";

export interface Tree {
  members: Person[];
}

export interface Person {
  id: Guid;
  firstname: string;
  lastname: string;
  middlename?: string;
  motherId?: Guid;
  fatherId?: Guid;
  birthDate?: string;
  createdAt: string;
  modifiedAt: string;
  relationships?: Relationship[];
  alias?: string;
}

export interface Relationship {
  partner: Guid;
  children: Guid[];
}
