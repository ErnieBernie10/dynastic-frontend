import React, { forwardRef } from "react";
import { Member } from "../api/interface/Tree";
import { CoupleNode } from "./CoupleNode";
import { SingleNode } from "./SingleNode";

interface TreeNodeProps {
  person: Member;
}
export const TreeNode = forwardRef<HTMLDivElement, TreeNodeProps>(
  ({ person }, ref) => {
    const hasPartner = person.relationships.length > 0;
    if (hasPartner) {
      // TODO: Add support for multiple partners per person
      const rel = person.relationships[0];
      return (
        <CoupleNode
          ref={ref}
          person={person}
          partner={rel.partner}
          couplesChildren={rel.children}
        />
      );
    } else {
      return <SingleNode person={person} />;
    }
  }
);
