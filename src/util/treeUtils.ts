import { Member } from "../api/interface/Tree";

export interface RawNodeDatum {
  name: string;
  attributes?: Record<string, string>;
  children?: RawNodeDatum[];
}

export interface TreeNodeDatum extends RawNodeDatum {
  children?: TreeNodeDatum[];
  __rd3t: {
    id: string;
    depth: number;
    collapsed: boolean;
  };
}

export const transformTree = (members: Member[]) => {
  return members.map(transformMember);
};

export const transformMember = (member: Member): RawNodeDatum => {
  return {
    name: member.firstname + " " + member.lastname,
  };
};
