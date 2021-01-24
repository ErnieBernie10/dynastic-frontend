import React from "react";
import { Person } from "../models/api/Person";
import { PersonNode } from "./PersonNode";

interface Props {
  person: Person;
}

export const SingleNode: React.FC<Props> = ({ person }: Props) => {
  return (
    <div
      style={{ margin: 50, display: "block" }}
      className={"node-" + person._id}
    >
      <PersonNode person={person} />
    </div>
  );
};
