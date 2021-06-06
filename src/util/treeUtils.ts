import { Members, Person, Relationship } from "../api/interface/FlatTree";

export const getChildren = (
  tree: Members,
  relationship: Relationship
): Person[] => {
  const childrenIds = relationship.children;
  return Object.values(tree).filter((p) => childrenIds.includes(p.id));
};

export const getRoots = (members: Members) =>
  Object.values(members).filter((m) => !m.motherId || !m.fatherId);
