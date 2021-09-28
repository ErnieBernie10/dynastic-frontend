import { Members, Person } from "../../api/interface/FlatTree";
import { FlowElement, Position } from "react-flow-renderer";

export const useTreeElements = (tree: Members) => {
  const initX = 250;
  const initY = 250;
  const elements: FlowElement[] = [];
  const alreadyAdded: Members = {};
  const copy = { ...tree };
  let y = initY;
  let x = initX;

  // TODO : Unspaghetti this
  for (const [id, person] of Object.entries(copy)) {
    if (alreadyAdded[id]) continue;
    elements.push(makeParentNode(person, x, y));
    x += initX;
    if (person.relationships) {
      for (const rel of person.relationships) {
        const partner = copy[rel.partner];
        elements.push(makeConnectingNode(person, partner, x, y));
        x += initX;
        elements.push(makePartnerNode(partner, x, y));
        x += initX;
        elements.push(connect(person.id, getRelationshipId(person, partner)));
        elements.push(connect(getRelationshipId(person, partner), partner.id));
        alreadyAdded[partner.id] = partner;
        y += initY;
        x = initX * 2;
        for (const childId of rel.children) {
          const child = copy[childId];
          elements.push(makeChildNode(child, x, y));
          alreadyAdded[childId] = child;
          elements.push(connect(getRelationshipId(person, partner), childId));
          x += initX / 2;
        }
      }
    }
    y = initY;
  }
  return elements;
};

const connect = (node1Id: string, node2Id: string): FlowElement => ({
  id: `e-${node1Id}-${node2Id}`,
  type: "step",
  source: node1Id,
  target: node2Id,
});

const makeChildNode = (person: Person, x: number, y: number): FlowElement => ({
  id: person.id,
  position: { x, y },
  data: { label: person.firstname },
});

const makePartnerNode = (
  person: Person,
  x: number,
  y: number
): FlowElement => ({
  id: person.id,
  position: { x, y },
  sourcePosition: Position.Right,
  targetPosition: Position.Left,
  data: { label: person.firstname },
});

const makeParentNode = (person: Person, x: number, y: number): FlowElement => ({
  id: person.id,
  position: { x, y },
  sourcePosition: Position.Right,
  targetPosition: Position.Left,
  data: { label: person.firstname },
});

const makeConnectingNode = (
  person1: Person,
  person2: Person,
  x: number,
  y: number
): FlowElement => ({
  id: getRelationshipId(person1, person2),
  sourcePosition: Position.Right,
  targetPosition: Position.Left,
  position: { x, y },
  data: { label: "" },
});

const getRelationshipId = (person1: Person, person2: Person) =>
  `r-${person1.id}-${person2.id}`;
