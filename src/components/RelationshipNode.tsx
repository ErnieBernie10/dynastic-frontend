import React, { useMemo } from "react";
import { SteppedLineTo } from "react-lineto";
import { Person } from "../models/api/Person";
import { getChildrenFromCouple, getRelationship } from "../utils/treeUtils";
import { PersonNode } from "./PersonNode";
import { SingleNode } from "./SingleNode";

interface Props {
  person: Person;
  partner: Person;
  parent?: React.FC<Props>;
  people: Person[];
}

const RelationshipNode: React.FC<Props> = ({
  person,
  partner,
  people,
}: Props) => {
  const transformed = useMemo(() => {
    return getChildrenFromCouple({ person, partner }, people).map((p) => {
      return getRelationship(p, people);
    });
  }, [partner, people, person]);

  return (
    <div>
      <div style={{ margin: 50 }}>
        <div
          style={{ display: "flex", justifyContent: "center" }}
          className={"node-" + person._id}
        >
          <PersonNode
            className={"node-" + person._id + "-" + partner._id}
            person={person}
          />
          <PersonNode person={partner} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {transformed.map((r) => {
            const child = r.person;
            const partner = r.partner;
            if (partner) {
              return (
                <>
                  <RelationshipNode
                    person={child}
                    partner={partner}
                    people={people}
                  />
                  <SteppedLineTo
                    borderColor={"white"}
                    within={"tree-container"}
                    from={"node-" + person._id}
                    to={"node-" + child._id + "-" + partner._id}
                    orientation={"v"}
                    fromAnchor={"bottom"}
                    toAnchor={"top"}
                  />
                </>
              );
            } else {
              return (
                <>
                  <SingleNode person={child} />
                  <SteppedLineTo
                    borderColor={"white"}
                    within={"tree-container"}
                    from={"node-" + person._id}
                    to={"node-" + child._id}
                    orientation={"v"}
                    fromAnchor={"bottom"}
                    toAnchor={"top"}
                  />
                </>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default RelationshipNode;
