import React from "react";
import { Person } from "../models/Person";
import { Panel } from "rsuite";
import { getChildrenFromCouple, getRelationship } from "../utils/treeUtils";
import { PersonNode } from "./Person";

interface Props {
  person: Person;
  partner: Person;
  people: Person[];
}

export const Relationship: React.FC<Props> = ({ person, partner, people }: Props) => {
  return (
    <div style={{ margin: 50 }}>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
          <img src="https://via.placeholder.com/240x240" height="240" />
          <Panel header={person.name}>
          </Panel>
        </Panel>
        <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
          <img src="https://via.placeholder.com/240x240" height="240" />
          <Panel header={partner.name}>
          </Panel>
        </Panel>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
        {getChildrenFromCouple({ person, partner }, people).map(p => {
          const { person, partner } = getRelationship(p, people);
          if (partner) {
            return (
              <Relationship person={person} partner={partner} people={people} />
            );
          } else {
            return (
              <PersonNode person={person} />
            );
          }
        })}
      </div>
    </div>
  );
}