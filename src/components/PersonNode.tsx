import React from "react";
import { Panel } from "rsuite";
import { Person } from "../models/Person";

interface Props {
  person: Person;
  className?: string;
  style?: object;
}

export const PersonNode: React.FC<Props> = ({ person, className, style }: Props) => {
  return (
    <div>
      <Panel shaded bordered bodyFill className={className} style={{ ...style, display: 'inline-block', width: 240 }}>
        <img src="https://via.placeholder.com/240x240" height="240" />
        <Panel header={`${person.firstname}${person.middlename ? person.middlename + " " : " "}${person.lastname}`}>
        </Panel>
      </Panel>
    </div>
  );
}