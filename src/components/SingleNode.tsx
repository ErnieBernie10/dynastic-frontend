import React from "react";
import { Member } from "../api/interface/Tree";
import { PersonNode } from "./PersonNode";

interface Props {
  person: Member;
}

export const SingleNode: React.FC<Props> = ({ person }: Props) => {
  return <PersonNode person={person} />;
};
