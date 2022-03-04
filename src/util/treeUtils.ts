import { isEmpty } from "ramda";
import {
  Elements,
  Node as FlowNode,
  Node,
  NodeProps,
  Position,
} from "react-flow-renderer";
import { Guid } from "../interface/Common";
import { Person, Tree } from "../models/api/FlatTree";

const offset = 500;

export const calculateNextPositions = (node?: Node) => {
  let x = node?.position.x ?? 500;
  let y = node?.position.y ?? 0;
  switch (node?.data.side) {
    case Position.Top:
      y += offset;
      break;
    case Position.Right:
      x += offset;
      break;
    case Position.Bottom:
      y -= offset;
      break;
    case Position.Left:
      x -= offset;
      break;
  }
  return { x, y };
};

export const addChildNode = (
  elements: Elements,
  person: Partial<Person>,
  selectedNode?: Node
) => {
  const newNode = {
    id: `c-${selectedNode?.id}-${String(elements.length)}`,
    position: {
      x: selectedNode?.position.x ?? 0,
      y: selectedNode?.position.y ?? 0,
    },
    data: {
      label: person.firstname + " " + person.lastname,
      ...person,
    },
    type: "multi",
  };
  elements.push(newNode);
  // TODO: Refactor and optimize
  const childrenOfIntersection = elements.filter((e) =>
    e.id.startsWith(`c-${selectedNode?.id}`)
  );
  const childrenNotOfIntersection = elements.filter(
    (e) => !e.id.startsWith(`c-${selectedNode?.id}`)
  );
  const recalculatedChildren = recalculateChildren(
    childrenOfIntersection as Node[],
    selectedNode
  );
  const newElements = [...childrenNotOfIntersection, ...recalculatedChildren];
  return newElements;
};

export const addPartnerNode = (
  elements: Elements,
  person: Partial<Person>,
  selectedNode?: Node
) => {
  const { x, y } = calculateNextPositions(selectedNode);
  const newNode = {
    id: String(elements.length),
    position: {
      x,
      y,
    },
    data: {
      label: person.firstname + " " + person.lastname,
      ...person,
    },
    type: "multi",
  };
  const newElements = [...elements, newNode];
  if (selectedNode) {
    const intersectionNode = {
      id: `i-${selectedNode.id}-${newNode.id}`,
      // TODO: Implement this position to be dynamically calculated based on the height and width of the node
      position: {
        x: x + offset / 2 - 20,
        y: y + 240 / 2,
      },
      type: "intersection",
    };
    newElements.push(intersectionNode);
    newElements.push({
      id: `e-${selectedNode.id}-${intersectionNode.id}`,
      source: selectedNode.id,
      target: intersectionNode.id,
      sourceHandle: selectedNode.data.side === Position.Left ? "sl" : "sr",
      targetHandle: selectedNode.data.side === Position.Left ? "tr" : "tl",
    });
    newElements.push({
      id: `e-${intersectionNode.id}-${newNode.id}`,
      source: intersectionNode.id,
      target: newNode.id,
      sourceHandle: selectedNode.data.side === Position.Left ? "sl" : "sr",
      targetHandle: selectedNode.data.side === Position.Left ? "tr" : "tl",
    });
  }
  return newElements;
};

export const recalculateChildren = (children: Node[], intersection?: Node) => {
  let x: number;
  if (children.length % 2 === 0) {
    x = (intersection?.position.x ?? 0) - (children.length * offset - 240 / 2);
  } else {
    x = (intersection?.position.x ?? 0) - children.length * offset;
  }
  return children.map((c) => {
    const newEl = { ...c };
    newEl.position.x = x;
    newEl.position.y += 280;
    x += offset;
    x = x - 240 / 2;
    return c;
  });
  return children;
};

export const makeNodeFromProps = (
  { id, data, xPos, yPos, type }: NodeProps,
  side: Position
): Node => ({
  id,
  data: { ...data, side },
  position: { x: xPos ?? 0, y: yPos ?? 0 },
  type,
});

export const transformTree = (tree: Tree): Elements => {
  return new TreeTransformer(tree).transform();
};

// TODO: Finish this mechanism to automatically construct the tree visual
class TreeTransformer {
  private members: Person[];
  private static yOffset = 200;
  private static xOffset = 200;
  private elements: Elements;

  constructor(tree: Tree) {
    this.members = tree.members;
    this.elements = [];
  }

  public transform(): Elements {
    const root = this.members.find(
      (m) => m.motherId === undefined && m.fatherId === undefined
    );
    if (root) {
      this.transformChild(root, 0, 0);
    }
    return this.scale(this.elements);
  }

  private scale(elements: Elements) {
    return elements.map((e) => {
      if (Object.keys(e).includes("position")) {
        const node = e as FlowNode;
        node.position.x *= TreeTransformer.xOffset;
        node.position.y *= TreeTransformer.yOffset;
      }
      return e;
    });
  }

  private transformChild(p: Person, x: number, y: number) {
    if (p) {
      const added = this.addElement(p, x, y);
      this.addRelationships(added);
    }
  }

  private addRelationships(p: FlowNode): void {
    if (p.data.relationships) {
      const rel = p.data.relationships[0];
      const partner = this.getPerson(rel.partner);
      if (partner) {
        const added = this.addElement(partner, p.position.x + 1, p.position.y);
        this.connect(p, added);
        this.addChildren(p, added, rel.children);
      }
    }
  }

  private addChildren(person: FlowNode, partner: FlowNode, children: Guid[]) {
    const y = person.position.y + 1;
    if (!isEmpty(children)) {
      let currPos =
        (person.position.x + partner.position.x) / 2 - children.length / 2;
      const intersection = this.addIntersection(person, partner);
      for (const childId of children) {
        const child = this.members.find((p) => p.id === childId);
        if (child) {
          this.transformChild(child, currPos, y);
          this.connectChildToIntersection(intersection, child);
          if (child.relationships && !isEmpty(child.relationships)) {
            currPos++;
          }
          currPos++;
        }
      }
    }
  }

  private addIntersection(person: FlowNode, partner: FlowNode): FlowNode {
    const intersectionX = person.position.x + 1;
    const intersectionY = person.position.y - 0.5 + 1;

    const node: FlowNode = {
      id: `i${person.id}-${partner.id}`,
      position: {
        x: intersectionX,
        y: intersectionY,
      },
      type: "intersection",
    };
    this.elements.push(node);
    this.elements.push({
      id: `e${person.id}-${node.id}`,
      source: person.id,
      target: node.id,
      sourceHandle: "sr",
      targetHandle: "tt",
      type: "step",
    });
    this.elements.push({
      id: `e${partner.id}-${node.id}`,
      source: partner.id,
      target: node.id,
      sourceHandle: "sl",
      targetHandle: "tt",
      type: "step",
    });
    return node;
  }

  private connectChild(person: FlowNode, partner: FlowNode, child: Person) {
    this.elements.push({
      id: `e${person.id}-${child.id}`,
      source: person.id,
      target: child.id,
      sourceHandle: "sr",
      targetHandle: "tt",
      type: "step",
    });
    this.elements.push({
      id: `e${partner.id}-${child.id}`,
      source: partner.id,
      target: child.id,
      sourceHandle: "sl",
      targetHandle: "tt",
      type: "step",
    });
  }

  private connectChildToIntersection(intersection: FlowNode, child: Person) {
    this.elements.push({
      id: `e${intersection.id}-${child.id}`,
      source: intersection.id,
      target: child.id,
      sourceHandle: "sb",
      targetHandle: "tt",
      type: "step",
    });
  }

  private connect(person: FlowNode, partner: FlowNode) {
    this.elements.push({
      id: `e${person.id}-${partner.id}`,
      source: person.id,
      target: partner.id,
      sourceHandle: "sr",
      targetHandle: "tl",
      type: "step",
    });
  }

  private getPerson(id: Guid) {
    return this.members.find((e) => e.id === id);
  }

  private addElement(person: Person, x: number, y: number): FlowNode {
    const el = this.makeElement(x, y, person);
    this.elements.push(el);
    return el;
  }

  private makeElement(x: number, y: number, p: Person): FlowNode {
    return {
      id: p.id,
      position: {
        x,
        y,
      },
      data: {
        label: p.firstname + " " + p.lastname,
        relationships: p.relationships,
      },
      type: "multi",
    };
  }
}
