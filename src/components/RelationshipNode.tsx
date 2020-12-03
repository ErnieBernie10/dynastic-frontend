import React, { useMemo } from "react";
import { Person } from "../models/Person";
import { getChildrenFromCouple, getRelationship } from "../utils/treeUtils";
import { PersonNode } from "./PersonNode";
import { SingleNode } from "./SingleNode";

interface Props {
  person: Person;
  partner: Person;
  parent?: React.FC<Props>;
  people: Person[];
}

const RelationshipNode: React.FC<Props> = ({ person, partner, people }: Props) => {

  const transformed = useMemo(() => {
    return getChildrenFromCouple({ person, partner }, people).map(p => {
      return getRelationship(p, people);
    });
  }, [person])

  return (
    <div>
      <div style={{ margin: 50 }} className={"node-" + person._id}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PersonNode person={person} />
          <PersonNode person={partner} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {
            transformed.map(r => {
              const child = r.person;
              const partner = r.partner;
              if (partner) {
                return (
                  <RelationshipNode person={child} partner={partner} people={people} />
                );
              } else {
                return (
                  <SingleNode person={child} />
                );
              }
            })
          }
        </div>
      </div>
    </div>
  );
}

export default RelationshipNode;