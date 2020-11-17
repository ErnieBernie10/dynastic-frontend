import React from "react";
import { Panel } from "rsuite";
import { Person } from "../models/Person";

interface Props {
  person: Person;
}

export const PersonNode: React.FC<Props> = ({ person }: Props) => {
  return (
    <div style={{ margin: 50}}>
      <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
        <img src="https://via.placeholder.com/240x240" height="240" />
        <Panel header={person.name}>
        </Panel>
      </Panel>
    </div>
  );
}