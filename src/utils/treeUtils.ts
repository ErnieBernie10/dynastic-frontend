import { Person, Relationship } from "../models/Person";

export const getChildrenFromPerson = (person: Person,  people: Person[]) => people.filter(p => p.mother === person.id || p.father === person.id);

export const getChildrenFromCouple = ({ person, partner }: { person: Person, partner: Person }, people: Person[]) => {
  return people.filter(p => (p.mother === person.id || p.father === person.id) && (p.mother === partner.id || p.father === partner.id));
};

export const getRelationship = (person: Person, people: Person[]): Relationship => {
  const partner = people.find(p => p.relationship === person.id);
  if (partner) {
    return { person, partner };
  }
  return { person };
}