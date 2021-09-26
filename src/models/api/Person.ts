export interface Person {
  _id: string;
  firstname: string;
  lastname: string;
  middlename?: string;
  mother?: string;
  father?: string;
  relationships?: string[];
}

export interface Relationship {
  person: Person;
  partner?: Person;
}
