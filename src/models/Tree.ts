export interface Tree {
  member: Member;
}

export interface Member {
  firstname: string;
  middlename: string;
  lastname: string;
  mother: Member;
  motherId: string | null;
  father: Member;
  fatherId: string | null;
  relationships: Couple[];
}

export interface Couple {
  partner: Member;
  children: Member[];
}
