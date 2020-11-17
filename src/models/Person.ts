export interface Person {
  id: number;
  name: string;
  mother?: number;
  father?: number;
  relationship?: number;
}

export interface Relationship {
  person: Person;
  partner?: Person;
}