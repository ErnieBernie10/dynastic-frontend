import React from "react";
import { Person } from "../api/interface/FlatTree";
import { PersonNode } from "./PersonNode";

interface Props {
  person: Person;
}

export const SingleNode: React.FC<Props> = ({ person }: Props) => {
  return <PersonNode person={person} />;
};
