import React from "react";
import { Person } from "../models/Person";
import { PersonNode } from "./PersonNode";

interface Props {
  person: Person;
}

export const SingleNode: React.FC<Props> = ({ person }: Props) => {
  return (
    <PersonNode person={person} style={{ margin: 50, display: "block" }} />
  );
}