import { Person, Relationship } from "../models/Person";

export const getChildrenFromPerson = (person: Person, people: Person[]) =>
  people.filter((p) => p.mother === person._id || p.father === person._id);

export const getChildrenFromCouple = (
  { person, partner }: { person: Person; partner: Person },
  people: Person[]
) => {
  return people.filter(
    (p) =>
      (p.mother === person._id || p.father === person._id) &&
      (p.mother === partner._id || p.father === partner._id)
  );
};

export const getRelationship = (
  person: Person,
  people: Person[]
): Relationship => {
  const partner = people.find((p) =>
    person.relationships?.find((pp) => pp === p._id)
  );
  if (partner) {
    return { person, partner };
  }
  return { person };
};
