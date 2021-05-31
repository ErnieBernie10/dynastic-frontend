export interface Member {
  firstname: string;
  middlename?: string;
  lastname: string;
  motherId?: string;
  fatherId?: string;
  birthDate: string;
  relationships: Relationship[];
  id: string;
  createdAt: string;
  modifiedAt: string;
}

export interface Relationship {
  partner?: Member;
  children: Member[];
}

export interface Tree {
  nestedTree: Member[];
}
